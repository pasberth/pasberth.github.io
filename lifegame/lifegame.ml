open JQuery

module Cell = struct

   type t = {
     self               : string;
     neighbours_list    : string list;
     when_born          : string -> unit;
     when_live          : string -> unit;
     when_dead          : string -> unit;
   }
end

type t = {
  cell_list : Cell.t list;
}

let update (life_game : t) : unit =
  let born_cells = ref [] in
  let live_cells = ref [] in
  let dead_cells = ref [] in

  let is_live_to_bool s =
    match Js.Optdef.to_option ((jQ s)##attr (Js.string "isLive")) with
      | None -> false
      | Some(is_live) -> Js.to_string is_live = "true" in

  List.iter (fun cell ->
    let neighbours_count = ref 0 in

    List.iter (fun neighbours ->
      if is_live_to_bool neighbours then
        neighbours_count := !neighbours_count + 1
      else
        ()) cell.Cell.neighbours_list;

    let is_live = is_live_to_bool cell.Cell.self in

    if not is_live && !neighbours_count == 3 then
      born_cells := cell :: !born_cells
    else if is_live && (!neighbours_count < 2 || !neighbours_count > 3) then
      dead_cells := cell :: !dead_cells
    else if is_live then
      live_cells := cell :: !live_cells
    else
      ()) life_game.cell_list;

  List.iter (fun cell -> cell.Cell.when_born cell.Cell.self) !born_cells;
  List.iter (fun cell -> cell.Cell.when_dead cell.Cell.self) !dead_cells;
  List.iter (fun cell -> cell.Cell.when_live cell.Cell.self) !live_cells

