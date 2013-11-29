(defrecord Just [t])
(defrecord Fail [infos])
(defrecord Info [expected actual ast-at])

(defn expect-arity [n t] (when (not= (count t) n)
  (throw (RuntimeException. (str t " unexpected")))))

(defn typeof [t] (case t
  true  (Just. 'Boolean)
  false (Just. 'Boolean)
  0     (Just. 'Long)
  (cond
    (not (seq? t))
      (throw (RuntimeException. (str t " unexpected")))
    :else
      (case (first t)
        if
          (do
            (expect-arity 4 t)
            (let [t1 (typeof (nth t 1))
                  t2 (typeof (nth t 2))
                  t3 (typeof (nth t 3))]
              (cond
                (some #(instance? Fail %) [t1 t2 t3])
                  (let [failures [ (update-in t1 [:infos] (partial map #(update-in % [:ast-at] (partial cons 1))))
                                   (update-in t2 [:infos] (partial map #(update-in % [:ast-at] (partial cons 2))))
                                   (update-in t3 [:infos] (partial map #(update-in % [:ast-at] (partial cons 3)))) ]]
                    (Fail. (apply concat (map :infos (filter #(instance? Fail %) failures)))))
                (and (not= 'Boolean (:t t1)) (not= (:t t2) (:t t3)))
                  (Fail. [(Info. 'Boolean (:t t1) [1])
                          (Info. (:t t2) (:t t3) [3])])
                (not= 'Boolean (:t t1))
                  (Fail. [(Info. 'Boolean (:t t1) [1])])
                (not= (:t t2) (:t t3))
                  (Fail. [(Info. (:t t2) (:t t3) [3])])
                :else
                  t2)))
        succ
          (do
            (expect-arity 2 t)
            (let [t1 (typeof (nth t 1))]
              (cond
                (instance? Fail t1)
                  (update-in t1 [:infos] (partial map #(update-in % [:ast-at] (partial cons 1))))
                (not= 'Long (:t t1))
                  (Fail. [(Info. 'Long (:t t1) [1])])
                :else
                  (Just. 'Long))))
        pred
          (do
            (expect-arity 2 t)
            (let [t1 (typeof (nth t 1))]
              (cond
                (instance? Fail t1)
                  (update-in t1 [:infos] (partial map #(update-in % [:ast-at] (partial cons 1))))
                (not= 'Long (:t t1))
                  (Fail. [(Info. 'Long (:t t1) [1])])
                :else
                  (Just. 'Long))))
        iszero
          (do
            (expect-arity 2 t)
            (let [t1 (typeof (nth t 1))]
              (cond
                (instance? Fail t1)
                  (update-in t1 [:infos] (partial map #(update-in % [:ast-at] (partial cons 1))))
                (not= 'Long (:t t1))
                  (Fail. [(Info. 'Long (:t t1) [1])])
                :else
                  (Just. 'Boolean))))
        (throw (RuntimeException. (str t " unexpected")))))))

(defn print-typeof [t]
  (let [R (typeof t)]
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
            (println (str "expected " (:expected info) " but got " (:actual info)))
            (println t)
            (let [failure (reduce (fn [t i]
              (do (print (apply str (replicate (count (str (apply list (take i t)))) " ")))
                  (nth t i))) t (:ast-at info))]
              (println (apply str (replicate (count (str failure)) "~"))))))))))

(print-typeof true)
(print-typeof false)
(print-typeof 0)
(print-typeof '(succ 0))
(print-typeof '(pred 0))
(print-typeof '(iszero 0))
(print-typeof '(if (iszero 0) 0 (pred 0)))
(print-typeof '(if (iszero 0) false true))

(print-typeof '(succ false))
(print-typeof '(pred true))
(print-typeof '(if (iszero false) 0 0))
(print-typeof '(if (iszero 0) 0 true))
(print-typeof '(if (succ 0) 0 true))