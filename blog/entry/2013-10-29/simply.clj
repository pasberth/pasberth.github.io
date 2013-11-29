(defrecord Just [t])
(defrecord Fail [infos])
(defrecord Info [expected actual ast-at])
(defrecord NotFound [t])

(defrecord Arr [src tgt])

(defn eval-type [t] (case t
  Long Long
  (if (= 1 (count t))
    (eval-type (first t))
    (case (nth t 1)
      -> (Arr. (eval-type (nth t 0)) (eval-type (nnext t)))))))

(defn typeof [e t] (cond
  (integer? t)
    (Just. Long)
  (symbol? t)
    (let [xtype (get e t)] (if (nil? xtype)
      (Fail. [(NotFound. t)])
      (Just. xtype)))
  (seq? t) (case (first t)
    lambda
      (do
        (when (not= 4 (count t))
          (throw (RuntimeException. (str t " unexpected"))))
        (let [ param (nth t 1)
               ptype (eval-type (nth t 2))
               body  (nth t 3)
               e'    (assoc e param ptype)
               bodyt (typeof e' body) ] (cond
          (instance? Fail bodyt)
            (update-in bodyt [:infos] (partial map #(update-in % [:ast-at] (partial cons 3))))
          :else
            (Just. (Arr. ptype (:t bodyt))))))
    (do
      (let [ types (map #(typeof e %) t) ] (cond
        (some #(instance? Fail %) types)
          (let [failures (for [[i t1] (map-indexed (fn [i t1] [(inc i) t1]) types)]
                            (update-in t1 [:infos] (partial map #(update-in % [:ast-at] (partial cons i)))))]
              (Fail. (apply concat (map :infos (filter #(instance? Fail %) failures)))))
        :else
          (nth (reduce (fn [[i f] x] (cond
                            (instance? Fail f)
                              [nil f]
                            (instance? Arr (:t f)) (cond
                              (= (:src (:t f)) (:t x))
                                [(inc i) (Just. (:tgt (:t f)))]
                              :else
                                [nil (Fail. [(Info. (:src (:t f)) (:t x) [(inc i)])])])
                            :else
                              [nil (Fail. [(Info. (Arr. (:t x) :a) (:t f) [i])])]))
                    [0 (first types)] (rest types))
            1)))))))

(defn print-typeof [t]
  (let [R (typeof {} t)]
    (cond
      (instance? Just R)
        (do
          (print t)
          (print " : ")
          (println (:t R)))
      :else
        (do
          (println (str "Type failure: " t))
          (doseq [info (:infos R)] (do
            (when (instance? Info info) (do
              (print "expected ")
              (print (:expected info))
              (print " but got ")
              (println (:actual info))))
            (when (instance? NotFound info)
              (println (str "not in scope: `" (:t info) "'")))
            (println t)
            (let [failure (reduce (fn [t i]
              (do (print (apply str (replicate (count (str (apply list (take i t)))) " ")))
                  (nth t i))) t (:ast-at info))]
              (println (apply str (replicate (count (str failure)) "~"))))))))))

(print-typeof 42)
(print-typeof '(lambda x Long 42))

(print-typeof '(lambda x Long x))
(print-typeof '(lambda x Long (lambda y Long x)))
(print-typeof '(lambda x Long y))

(print-typeof '(lambda f (Long -> Long) (lambda x Long f)))
(print-typeof '(lambda f (Long -> Long) (lambda x Long x)))

(print-typeof '((lambda f (Long -> Long) f) 42))
(print-typeof '((lambda f (Long -> Long) f) (lambda x Long x)))
(print-typeof '((lambda x Long x) (lambda x Long x)))
