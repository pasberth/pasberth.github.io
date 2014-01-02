open Mysql

let user = (* Replace this comment with login user. *)
let pwd = (* Replace this comment with login password. *)

let localdb =
  {
    dbhost      = Some("localhost");
    dbname      = Some("ocaml_mysql_test_db");
    dbport      = None;
    dbpwd       = Some(pwd);
    dbuser      = Some(user);
    dbsocket    = None;
  }

let connection = connect localdb
let exec1 = exec connection


let () = begin
  ping connection;
  exec1 "CREATE TABLE ocaml_mysql_test_table (ocaml_mysql_test_column TEXT);";
  exec1 "INSERT INTO ocaml_mysql_test_table (ocaml_mysql_test_column) VALUES (\"test data 1\");";
  exec1 "INSERT INTO ocaml_mysql_test_table (ocaml_mysql_test_column) VALUES (\"test data 2\");";
  exec1 "INSERT INTO ocaml_mysql_test_table (ocaml_mysql_test_column) VALUES (\"test data 3\");";
  let res = exec1 "SELECT ocaml_mysql_test_column FROM ocaml_mysql_test_table;" in
  Mysql.iter
        res
        (Array.iter (function
            | None ->
                print_endline "None";
            | Some(line) ->
                print_string "got: ";
                print_endline line));
  disconnect connection;
end