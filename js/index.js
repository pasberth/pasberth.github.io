// Generated by CoffeeScript 1.3.3
(function() {
  var CSS_PATTERNS, INITIAL_PATTERNS, LifeGameControlHTML;

  CSS_PATTERNS = ["css/lifegame-ball.css", "css/lifegame-ring.css", "css/lifegame-classic.css"];

  INITIAL_PATTERNS = [[[10, 10], [11, 10], [11, 11], [12, 11], [11, 12]], [[11, 16], [13, 16], [13, 15], [15, 14], [15, 13], [15, 12], [17, 13], [17, 12], [17, 11], [18, 12]], [[10, 10], [11, 10], [12, 10], [14, 10], [10, 11], [13, 12], [14, 12], [11, 13], [12, 13], [14, 13], [10, 14], [12, 14], [14, 14]], [[11, 10], [13, 11], [10, 12], [11, 12], [14, 12], [15, 12], [16, 12]]];

  LifeGameControlHTML = "";

  LifeGameControlHTML += '<section class="content">';

  LifeGameControlHTML += '<header><h1 class="content-title">Life Game</h1></header>';

  LifeGameControlHTML += '<div id="lifegame-control">';

  LifeGameControlHTML += '<div id="lifegame-control-0-0"></div><div id="lifegame-control-0-1"></div><div id="lifegame-control-0-2"></div><div id="lifegame-control-0-3"></div><div id="lifegame-control-0-4"></div><div id="lifegame-control-0-5"></div><div id="lifegame-control-0-6"></div><div id="lifegame-control-0-7"></div><div id="lifegame-control-0-8"></div><div id="lifegame-control-0-9"></div><div id="lifegame-control-0-10"></div><div id="lifegame-control-0-11"></div><div id="lifegame-control-0-12"></div><div id="lifegame-control-0-13"></div><div id="lifegame-control-0-14"></div><div id="lifegame-control-0-15"></div><div id="lifegame-control-0-16"></div><div id="lifegame-control-0-17"></div><div id="lifegame-control-0-18"></div><div id="lifegame-control-0-19"></div><div id="lifegame-control-0-20"></div><div id="lifegame-control-0-21"></div><div id="lifegame-control-0-22"></div><div id="lifegame-control-0-23"></div><div id="lifegame-control-0-24"></div><div id="lifegame-control-0-25"></div><div id="lifegame-control-0-26"></div><div id="lifegame-control-0-27"></div><div id="lifegame-control-0-28"></div><div id="lifegame-control-0-29"></div><div id="lifegame-control-1-0"></div><div id="lifegame-control-1-1"></div><div id="lifegame-control-1-2"></div><div id="lifegame-control-1-3"></div><div id="lifegame-control-1-4"></div><div id="lifegame-control-1-5"></div><div id="lifegame-control-1-6"></div><div id="lifegame-control-1-7"></div><div id="lifegame-control-1-8"></div><div id="lifegame-control-1-9"></div><div id="lifegame-control-1-10"></div><div id="lifegame-control-1-11"></div><div id="lifegame-control-1-12"></div><div id="lifegame-control-1-13"></div><div id="lifegame-control-1-14"></div><div id="lifegame-control-1-15"></div><div id="lifegame-control-1-16"></div><div id="lifegame-control-1-17"></div><div id="lifegame-control-1-18"></div><div id="lifegame-control-1-19"></div><div id="lifegame-control-1-20"></div><div id="lifegame-control-1-21"></div><div id="lifegame-control-1-22"></div><div id="lifegame-control-1-23"></div><div id="lifegame-control-1-24"></div><div id="lifegame-control-1-25"></div><div id="lifegame-control-1-26"></div><div id="lifegame-control-1-27"></div><div id="lifegame-control-1-28"></div><div id="lifegame-control-1-29"></div><div id="lifegame-control-2-0"></div><div id="lifegame-control-2-1"></div><div id="lifegame-control-2-2"></div><div id="lifegame-control-2-3"></div><div id="lifegame-control-2-4"></div><div id="lifegame-control-2-5"></div><div id="lifegame-control-2-6"></div><div id="lifegame-control-2-7"></div><div id="lifegame-control-2-8"></div><div id="lifegame-control-2-9"></div><div id="lifegame-control-2-10"></div><div id="lifegame-control-2-11"></div><div id="lifegame-control-2-12"></div><div id="lifegame-control-2-13"></div><div id="lifegame-control-2-14"></div><div id="lifegame-control-2-15"></div><div id="lifegame-control-2-16"></div><div id="lifegame-control-2-17"></div><div id="lifegame-control-2-18"></div><div id="lifegame-control-2-19"></div><div id="lifegame-control-2-20"></div><div id="lifegame-control-2-21"></div><div id="lifegame-control-2-22"></div><div id="lifegame-control-2-23"></div><div id="lifegame-control-2-24"></div><div id="lifegame-control-2-25"></div><div id="lifegame-control-2-26"></div><div id="lifegame-control-2-27"></div><div id="lifegame-control-2-28"></div><div id="lifegame-control-2-29"></div><div id="lifegame-control-3-0"></div><div id="lifegame-control-3-1"></div><div id="lifegame-control-3-2"></div><div id="lifegame-control-3-3"></div><div id="lifegame-control-3-4"></div><div id="lifegame-control-3-5"></div><div id="lifegame-control-3-6"></div><div id="lifegame-control-3-7"></div><div id="lifegame-control-3-8"></div><div id="lifegame-control-3-9"></div><div id="lifegame-control-3-10"></div><div id="lifegame-control-3-11"></div><div id="lifegame-control-3-12"></div><div id="lifegame-control-3-13"></div><div id="lifegame-control-3-14"></div><div id="lifegame-control-3-15"></div><div id="lifegame-control-3-16"></div><div id="lifegame-control-3-17"></div><div id="lifegame-control-3-18"></div><div id="lifegame-control-3-19"></div><div id="lifegame-control-3-20"></div><div id="lifegame-control-3-21"></div><div id="lifegame-control-3-22"></div><div id="lifegame-control-3-23"></div><div id="lifegame-control-3-24"></div><div id="lifegame-control-3-25"></div><div id="lifegame-control-3-26"></div><div id="lifegame-control-3-27"></div><div id="lifegame-control-3-28"></div><div id="lifegame-control-3-29"></div><div id="lifegame-control-4-0"></div><div id="lifegame-control-4-1"></div><div id="lifegame-control-4-2"></div><div id="lifegame-control-4-3"></div><div id="lifegame-control-4-4"></div><div id="lifegame-control-4-5"></div><div id="lifegame-control-4-6"></div><div id="lifegame-control-4-7"></div><div id="lifegame-control-4-8"></div><div id="lifegame-control-4-9"></div><div id="lifegame-control-4-10"></div><div id="lifegame-control-4-11"></div><div id="lifegame-control-4-12"></div><div id="lifegame-control-4-13"></div><div id="lifegame-control-4-14"></div><div id="lifegame-control-4-15"></div><div id="lifegame-control-4-16"></div><div id="lifegame-control-4-17"></div><div id="lifegame-control-4-18"></div><div id="lifegame-control-4-19"></div><div id="lifegame-control-4-20"></div><div id="lifegame-control-4-21"></div><div id="lifegame-control-4-22"></div><div id="lifegame-control-4-23"></div><div id="lifegame-control-4-24"></div><div id="lifegame-control-4-25"></div><div id="lifegame-control-4-26"></div><div id="lifegame-control-4-27"></div><div id="lifegame-control-4-28"></div><div id="lifegame-control-4-29"></div><div id="lifegame-control-5-0"></div><div id="lifegame-control-5-1"></div><div id="lifegame-control-5-2"></div><div id="lifegame-control-5-3"></div><div id="lifegame-control-5-4"></div><div id="lifegame-control-5-5"></div><div id="lifegame-control-5-6"></div><div id="lifegame-control-5-7"></div><div id="lifegame-control-5-8"></div><div id="lifegame-control-5-9"></div><div id="lifegame-control-5-10"></div><div id="lifegame-control-5-11"></div><div id="lifegame-control-5-12"></div><div id="lifegame-control-5-13"></div><div id="lifegame-control-5-14"></div><div id="lifegame-control-5-15"></div><div id="lifegame-control-5-16"></div><div id="lifegame-control-5-17"></div><div id="lifegame-control-5-18"></div><div id="lifegame-control-5-19"></div><div id="lifegame-control-5-20"></div><div id="lifegame-control-5-21"></div><div id="lifegame-control-5-22"></div><div id="lifegame-control-5-23"></div><div id="lifegame-control-5-24"></div><div id="lifegame-control-5-25"></div><div id="lifegame-control-5-26"></div><div id="lifegame-control-5-27"></div><div id="lifegame-control-5-28"></div><div id="lifegame-control-5-29"></div><div id="lifegame-control-6-0"></div><div id="lifegame-control-6-1"></div><div id="lifegame-control-6-2"></div><div id="lifegame-control-6-3"></div><div id="lifegame-control-6-4"></div><div id="lifegame-control-6-5"></div><div id="lifegame-control-6-6"></div><div id="lifegame-control-6-7"></div><div id="lifegame-control-6-8"></div><div id="lifegame-control-6-9"></div><div id="lifegame-control-6-10"></div><div id="lifegame-control-6-11"></div><div id="lifegame-control-6-12"></div><div id="lifegame-control-6-13"></div><div id="lifegame-control-6-14"></div><div id="lifegame-control-6-15"></div><div id="lifegame-control-6-16"></div><div id="lifegame-control-6-17"></div><div id="lifegame-control-6-18"></div><div id="lifegame-control-6-19"></div><div id="lifegame-control-6-20"></div><div id="lifegame-control-6-21"></div><div id="lifegame-control-6-22"></div><div id="lifegame-control-6-23"></div><div id="lifegame-control-6-24"></div><div id="lifegame-control-6-25"></div><div id="lifegame-control-6-26"></div><div id="lifegame-control-6-27"></div><div id="lifegame-control-6-28"></div><div id="lifegame-control-6-29"></div><div id="lifegame-control-7-0"></div><div id="lifegame-control-7-1"></div><div id="lifegame-control-7-2"></div><div id="lifegame-control-7-3"></div><div id="lifegame-control-7-4"></div><div id="lifegame-control-7-5"></div><div id="lifegame-control-7-6"></div><div id="lifegame-control-7-7"></div><div id="lifegame-control-7-8"></div><div id="lifegame-control-7-9"></div><div id="lifegame-control-7-10"></div><div id="lifegame-control-7-11"></div><div id="lifegame-control-7-12"></div><div id="lifegame-control-7-13"></div><div id="lifegame-control-7-14"></div><div id="lifegame-control-7-15"></div><div id="lifegame-control-7-16"></div><div id="lifegame-control-7-17"></div><div id="lifegame-control-7-18"></div><div id="lifegame-control-7-19"></div><div id="lifegame-control-7-20"></div><div id="lifegame-control-7-21"></div><div id="lifegame-control-7-22"></div><div id="lifegame-control-7-23"></div><div id="lifegame-control-7-24"></div><div id="lifegame-control-7-25"></div><div id="lifegame-control-7-26"></div><div id="lifegame-control-7-27"></div><div id="lifegame-control-7-28"></div><div id="lifegame-control-7-29"></div><div id="lifegame-control-8-0"></div><div id="lifegame-control-8-1"></div><div id="lifegame-control-8-2"></div><div id="lifegame-control-8-3"></div><div id="lifegame-control-8-4"></div><div id="lifegame-control-8-5"></div><div id="lifegame-control-8-6"></div><div id="lifegame-control-8-7"></div><div id="lifegame-control-8-8"></div><div id="lifegame-control-8-9"></div><div id="lifegame-control-8-10"></div><div id="lifegame-control-8-11"></div><div id="lifegame-control-8-12"></div><div id="lifegame-control-8-13"></div><div id="lifegame-control-8-14"></div><div id="lifegame-control-8-15"></div><div id="lifegame-control-8-16"></div><div id="lifegame-control-8-17"></div><div id="lifegame-control-8-18"></div><div id="lifegame-control-8-19"></div><div id="lifegame-control-8-20"></div><div id="lifegame-control-8-21"></div><div id="lifegame-control-8-22"></div><div id="lifegame-control-8-23"></div><div id="lifegame-control-8-24"></div><div id="lifegame-control-8-25"></div><div id="lifegame-control-8-26"></div><div id="lifegame-control-8-27"></div><div id="lifegame-control-8-28"></div><div id="lifegame-control-8-29"></div><div id="lifegame-control-9-0"></div><div id="lifegame-control-9-1"></div><div id="lifegame-control-9-2"></div><div id="lifegame-control-9-3"></div><div id="lifegame-control-9-4"></div><div id="lifegame-control-9-5"></div><div id="lifegame-control-9-6"></div><div id="lifegame-control-9-7"></div><div id="lifegame-control-9-8"></div><div id="lifegame-control-9-9"></div><div id="lifegame-control-9-10"></div><div id="lifegame-control-9-11"></div><div id="lifegame-control-9-12"></div><div id="lifegame-control-9-13"></div><div id="lifegame-control-9-14"></div><div id="lifegame-control-9-15"></div><div id="lifegame-control-9-16"></div><div id="lifegame-control-9-17"></div><div id="lifegame-control-9-18"></div><div id="lifegame-control-9-19"></div><div id="lifegame-control-9-20"></div><div id="lifegame-control-9-21"></div><div id="lifegame-control-9-22"></div><div id="lifegame-control-9-23"></div><div id="lifegame-control-9-24"></div><div id="lifegame-control-9-25"></div><div id="lifegame-control-9-26"></div><div id="lifegame-control-9-27"></div><div id="lifegame-control-9-28"></div><div id="lifegame-control-9-29"></div><div id="lifegame-control-10-0"></div><div id="lifegame-control-10-1"></div><div id="lifegame-control-10-2"></div><div id="lifegame-control-10-3"></div><div id="lifegame-control-10-4"></div><div id="lifegame-control-10-5"></div><div id="lifegame-control-10-6"></div><div id="lifegame-control-10-7"></div><div id="lifegame-control-10-8"></div><div id="lifegame-control-10-9"></div><div id="lifegame-control-10-10"></div><div id="lifegame-control-10-11"></div><div id="lifegame-control-10-12"></div><div id="lifegame-control-10-13"></div><div id="lifegame-control-10-14"></div><div id="lifegame-control-10-15"></div><div id="lifegame-control-10-16"></div><div id="lifegame-control-10-17"></div><div id="lifegame-control-10-18"></div><div id="lifegame-control-10-19"></div><div id="lifegame-control-10-20"></div><div id="lifegame-control-10-21"></div><div id="lifegame-control-10-22"></div><div id="lifegame-control-10-23"></div><div id="lifegame-control-10-24"></div><div id="lifegame-control-10-25"></div><div id="lifegame-control-10-26"></div><div id="lifegame-control-10-27"></div><div id="lifegame-control-10-28"></div><div id="lifegame-control-10-29"></div><div id="lifegame-control-11-0"></div><div id="lifegame-control-11-1"></div><div id="lifegame-control-11-2"></div><div id="lifegame-control-11-3"></div><div id="lifegame-control-11-4"></div><div id="lifegame-control-11-5"></div><div id="lifegame-control-11-6"></div><div id="lifegame-control-11-7"></div><div id="lifegame-control-11-8"></div><div id="lifegame-control-11-9"></div><div id="lifegame-control-11-10"></div><div id="lifegame-control-11-11"></div><div id="lifegame-control-11-12"></div><div id="lifegame-control-11-13"></div><div id="lifegame-control-11-14"></div><div id="lifegame-control-11-15"></div><div id="lifegame-control-11-16"></div><div id="lifegame-control-11-17"></div><div id="lifegame-control-11-18"></div><div id="lifegame-control-11-19"></div><div id="lifegame-control-11-20"></div><div id="lifegame-control-11-21"></div><div id="lifegame-control-11-22"></div><div id="lifegame-control-11-23"></div><div id="lifegame-control-11-24"></div><div id="lifegame-control-11-25"></div><div id="lifegame-control-11-26"></div><div id="lifegame-control-11-27"></div><div id="lifegame-control-11-28"></div><div id="lifegame-control-11-29"></div><div id="lifegame-control-12-0"></div><div id="lifegame-control-12-1"></div><div id="lifegame-control-12-2"></div><div id="lifegame-control-12-3"></div><div id="lifegame-control-12-4"></div><div id="lifegame-control-12-5"></div><div id="lifegame-control-12-6"></div><div id="lifegame-control-12-7"></div><div id="lifegame-control-12-8"></div><div id="lifegame-control-12-9"></div><div id="lifegame-control-12-10"></div><div id="lifegame-control-12-11"></div><div id="lifegame-control-12-12"></div><div id="lifegame-control-12-13"></div><div id="lifegame-control-12-14"></div><div id="lifegame-control-12-15"></div><div id="lifegame-control-12-16"></div><div id="lifegame-control-12-17"></div><div id="lifegame-control-12-18"></div><div id="lifegame-control-12-19"></div><div id="lifegame-control-12-20"></div><div id="lifegame-control-12-21"></div><div id="lifegame-control-12-22"></div><div id="lifegame-control-12-23"></div><div id="lifegame-control-12-24"></div><div id="lifegame-control-12-25"></div><div id="lifegame-control-12-26"></div><div id="lifegame-control-12-27"></div><div id="lifegame-control-12-28"></div><div id="lifegame-control-12-29"></div><div id="lifegame-control-13-0"></div><div id="lifegame-control-13-1"></div><div id="lifegame-control-13-2"></div><div id="lifegame-control-13-3"></div><div id="lifegame-control-13-4"></div><div id="lifegame-control-13-5"></div><div id="lifegame-control-13-6"></div><div id="lifegame-control-13-7"></div><div id="lifegame-control-13-8"></div><div id="lifegame-control-13-9"></div><div id="lifegame-control-13-10"></div><div id="lifegame-control-13-11"></div><div id="lifegame-control-13-12"></div><div id="lifegame-control-13-13"></div><div id="lifegame-control-13-14"></div><div id="lifegame-control-13-15"></div><div id="lifegame-control-13-16"></div><div id="lifegame-control-13-17"></div><div id="lifegame-control-13-18"></div><div id="lifegame-control-13-19"></div><div id="lifegame-control-13-20"></div><div id="lifegame-control-13-21"></div><div id="lifegame-control-13-22"></div><div id="lifegame-control-13-23"></div><div id="lifegame-control-13-24"></div><div id="lifegame-control-13-25"></div><div id="lifegame-control-13-26"></div><div id="lifegame-control-13-27"></div><div id="lifegame-control-13-28"></div><div id="lifegame-control-13-29"></div><div id="lifegame-control-14-0"></div><div id="lifegame-control-14-1"></div><div id="lifegame-control-14-2"></div><div id="lifegame-control-14-3"></div><div id="lifegame-control-14-4"></div><div id="lifegame-control-14-5"></div><div id="lifegame-control-14-6"></div><div id="lifegame-control-14-7"></div><div id="lifegame-control-14-8"></div><div id="lifegame-control-14-9"></div><div id="lifegame-control-14-10"></div><div id="lifegame-control-14-11"></div><div id="lifegame-control-14-12"></div><div id="lifegame-control-14-13"></div><div id="lifegame-control-14-14"></div><div id="lifegame-control-14-15"></div><div id="lifegame-control-14-16"></div><div id="lifegame-control-14-17"></div><div id="lifegame-control-14-18"></div><div id="lifegame-control-14-19"></div><div id="lifegame-control-14-20"></div><div id="lifegame-control-14-21"></div><div id="lifegame-control-14-22"></div><div id="lifegame-control-14-23"></div><div id="lifegame-control-14-24"></div><div id="lifegame-control-14-25"></div><div id="lifegame-control-14-26"></div><div id="lifegame-control-14-27"></div><div id="lifegame-control-14-28"></div><div id="lifegame-control-14-29"></div><div id="lifegame-control-15-0"></div><div id="lifegame-control-15-1"></div><div id="lifegame-control-15-2"></div><div id="lifegame-control-15-3"></div><div id="lifegame-control-15-4"></div><div id="lifegame-control-15-5"></div><div id="lifegame-control-15-6"></div><div id="lifegame-control-15-7"></div><div id="lifegame-control-15-8"></div><div id="lifegame-control-15-9"></div><div id="lifegame-control-15-10"></div><div id="lifegame-control-15-11"></div><div id="lifegame-control-15-12"></div><div id="lifegame-control-15-13"></div><div id="lifegame-control-15-14"></div><div id="lifegame-control-15-15"></div><div id="lifegame-control-15-16"></div><div id="lifegame-control-15-17"></div><div id="lifegame-control-15-18"></div><div id="lifegame-control-15-19"></div><div id="lifegame-control-15-20"></div><div id="lifegame-control-15-21"></div><div id="lifegame-control-15-22"></div><div id="lifegame-control-15-23"></div><div id="lifegame-control-15-24"></div><div id="lifegame-control-15-25"></div><div id="lifegame-control-15-26"></div><div id="lifegame-control-15-27"></div><div id="lifegame-control-15-28"></div><div id="lifegame-control-15-29"></div><div id="lifegame-control-16-0"></div><div id="lifegame-control-16-1"></div><div id="lifegame-control-16-2"></div><div id="lifegame-control-16-3"></div><div id="lifegame-control-16-4"></div><div id="lifegame-control-16-5"></div><div id="lifegame-control-16-6"></div><div id="lifegame-control-16-7"></div><div id="lifegame-control-16-8"></div><div id="lifegame-control-16-9"></div><div id="lifegame-control-16-10"></div><div id="lifegame-control-16-11"></div><div id="lifegame-control-16-12"></div><div id="lifegame-control-16-13"></div><div id="lifegame-control-16-14"></div><div id="lifegame-control-16-15"></div><div id="lifegame-control-16-16"></div><div id="lifegame-control-16-17"></div><div id="lifegame-control-16-18"></div><div id="lifegame-control-16-19"></div><div id="lifegame-control-16-20"></div><div id="lifegame-control-16-21"></div><div id="lifegame-control-16-22"></div><div id="lifegame-control-16-23"></div><div id="lifegame-control-16-24"></div><div id="lifegame-control-16-25"></div><div id="lifegame-control-16-26"></div><div id="lifegame-control-16-27"></div><div id="lifegame-control-16-28"></div><div id="lifegame-control-16-29"></div><div id="lifegame-control-17-0"></div><div id="lifegame-control-17-1"></div><div id="lifegame-control-17-2"></div><div id="lifegame-control-17-3"></div><div id="lifegame-control-17-4"></div><div id="lifegame-control-17-5"></div><div id="lifegame-control-17-6"></div><div id="lifegame-control-17-7"></div><div id="lifegame-control-17-8"></div><div id="lifegame-control-17-9"></div><div id="lifegame-control-17-10"></div><div id="lifegame-control-17-11"></div><div id="lifegame-control-17-12"></div><div id="lifegame-control-17-13"></div><div id="lifegame-control-17-14"></div><div id="lifegame-control-17-15"></div><div id="lifegame-control-17-16"></div><div id="lifegame-control-17-17"></div><div id="lifegame-control-17-18"></div><div id="lifegame-control-17-19"></div><div id="lifegame-control-17-20"></div><div id="lifegame-control-17-21"></div><div id="lifegame-control-17-22"></div><div id="lifegame-control-17-23"></div><div id="lifegame-control-17-24"></div><div id="lifegame-control-17-25"></div><div id="lifegame-control-17-26"></div><div id="lifegame-control-17-27"></div><div id="lifegame-control-17-28"></div><div id="lifegame-control-17-29"></div><div id="lifegame-control-18-0"></div><div id="lifegame-control-18-1"></div><div id="lifegame-control-18-2"></div><div id="lifegame-control-18-3"></div><div id="lifegame-control-18-4"></div><div id="lifegame-control-18-5"></div><div id="lifegame-control-18-6"></div><div id="lifegame-control-18-7"></div><div id="lifegame-control-18-8"></div><div id="lifegame-control-18-9"></div><div id="lifegame-control-18-10"></div><div id="lifegame-control-18-11"></div><div id="lifegame-control-18-12"></div><div id="lifegame-control-18-13"></div><div id="lifegame-control-18-14"></div><div id="lifegame-control-18-15"></div><div id="lifegame-control-18-16"></div><div id="lifegame-control-18-17"></div><div id="lifegame-control-18-18"></div><div id="lifegame-control-18-19"></div><div id="lifegame-control-18-20"></div><div id="lifegame-control-18-21"></div><div id="lifegame-control-18-22"></div><div id="lifegame-control-18-23"></div><div id="lifegame-control-18-24"></div><div id="lifegame-control-18-25"></div><div id="lifegame-control-18-26"></div><div id="lifegame-control-18-27"></div><div id="lifegame-control-18-28"></div><div id="lifegame-control-18-29"></div><div id="lifegame-control-19-0"></div><div id="lifegame-control-19-1"></div><div id="lifegame-control-19-2"></div><div id="lifegame-control-19-3"></div><div id="lifegame-control-19-4"></div><div id="lifegame-control-19-5"></div><div id="lifegame-control-19-6"></div><div id="lifegame-control-19-7"></div><div id="lifegame-control-19-8"></div><div id="lifegame-control-19-9"></div><div id="lifegame-control-19-10"></div><div id="lifegame-control-19-11"></div><div id="lifegame-control-19-12"></div><div id="lifegame-control-19-13"></div><div id="lifegame-control-19-14"></div><div id="lifegame-control-19-15"></div><div id="lifegame-control-19-16"></div><div id="lifegame-control-19-17"></div><div id="lifegame-control-19-18"></div><div id="lifegame-control-19-19"></div><div id="lifegame-control-19-20"></div><div id="lifegame-control-19-21"></div><div id="lifegame-control-19-22"></div><div id="lifegame-control-19-23"></div><div id="lifegame-control-19-24"></div><div id="lifegame-control-19-25"></div><div id="lifegame-control-19-26"></div><div id="lifegame-control-19-27"></div><div id="lifegame-control-19-28"></div><div id="lifegame-control-19-29"></div><div id="lifegame-control-20-0"></div><div id="lifegame-control-20-1"></div><div id="lifegame-control-20-2"></div><div id="lifegame-control-20-3"></div><div id="lifegame-control-20-4"></div><div id="lifegame-control-20-5"></div><div id="lifegame-control-20-6"></div><div id="lifegame-control-20-7"></div><div id="lifegame-control-20-8"></div><div id="lifegame-control-20-9"></div><div id="lifegame-control-20-10"></div><div id="lifegame-control-20-11"></div><div id="lifegame-control-20-12"></div><div id="lifegame-control-20-13"></div><div id="lifegame-control-20-14"></div><div id="lifegame-control-20-15"></div><div id="lifegame-control-20-16"></div><div id="lifegame-control-20-17"></div><div id="lifegame-control-20-18"></div><div id="lifegame-control-20-19"></div><div id="lifegame-control-20-20"></div><div id="lifegame-control-20-21"></div><div id="lifegame-control-20-22"></div><div id="lifegame-control-20-23"></div><div id="lifegame-control-20-24"></div><div id="lifegame-control-20-25"></div><div id="lifegame-control-20-26"></div><div id="lifegame-control-20-27"></div><div id="lifegame-control-20-28"></div><div id="lifegame-control-20-29"></div><div id="lifegame-control-21-0"></div><div id="lifegame-control-21-1"></div><div id="lifegame-control-21-2"></div><div id="lifegame-control-21-3"></div><div id="lifegame-control-21-4"></div><div id="lifegame-control-21-5"></div><div id="lifegame-control-21-6"></div><div id="lifegame-control-21-7"></div><div id="lifegame-control-21-8"></div><div id="lifegame-control-21-9"></div><div id="lifegame-control-21-10"></div><div id="lifegame-control-21-11"></div><div id="lifegame-control-21-12"></div><div id="lifegame-control-21-13"></div><div id="lifegame-control-21-14"></div><div id="lifegame-control-21-15"></div><div id="lifegame-control-21-16"></div><div id="lifegame-control-21-17"></div><div id="lifegame-control-21-18"></div><div id="lifegame-control-21-19"></div><div id="lifegame-control-21-20"></div><div id="lifegame-control-21-21"></div><div id="lifegame-control-21-22"></div><div id="lifegame-control-21-23"></div><div id="lifegame-control-21-24"></div><div id="lifegame-control-21-25"></div><div id="lifegame-control-21-26"></div><div id="lifegame-control-21-27"></div><div id="lifegame-control-21-28"></div><div id="lifegame-control-21-29"></div><div id="lifegame-control-22-0"></div><div id="lifegame-control-22-1"></div><div id="lifegame-control-22-2"></div><div id="lifegame-control-22-3"></div><div id="lifegame-control-22-4"></div><div id="lifegame-control-22-5"></div><div id="lifegame-control-22-6"></div><div id="lifegame-control-22-7"></div><div id="lifegame-control-22-8"></div><div id="lifegame-control-22-9"></div><div id="lifegame-control-22-10"></div><div id="lifegame-control-22-11"></div><div id="lifegame-control-22-12"></div><div id="lifegame-control-22-13"></div><div id="lifegame-control-22-14"></div><div id="lifegame-control-22-15"></div><div id="lifegame-control-22-16"></div><div id="lifegame-control-22-17"></div><div id="lifegame-control-22-18"></div><div id="lifegame-control-22-19"></div><div id="lifegame-control-22-20"></div><div id="lifegame-control-22-21"></div><div id="lifegame-control-22-22"></div><div id="lifegame-control-22-23"></div><div id="lifegame-control-22-24"></div><div id="lifegame-control-22-25"></div><div id="lifegame-control-22-26"></div><div id="lifegame-control-22-27"></div><div id="lifegame-control-22-28"></div><div id="lifegame-control-22-29"></div><div id="lifegame-control-23-0"></div><div id="lifegame-control-23-1"></div><div id="lifegame-control-23-2"></div><div id="lifegame-control-23-3"></div><div id="lifegame-control-23-4"></div><div id="lifegame-control-23-5"></div><div id="lifegame-control-23-6"></div><div id="lifegame-control-23-7"></div><div id="lifegame-control-23-8"></div><div id="lifegame-control-23-9"></div><div id="lifegame-control-23-10"></div><div id="lifegame-control-23-11"></div><div id="lifegame-control-23-12"></div><div id="lifegame-control-23-13"></div><div id="lifegame-control-23-14"></div><div id="lifegame-control-23-15"></div><div id="lifegame-control-23-16"></div><div id="lifegame-control-23-17"></div><div id="lifegame-control-23-18"></div><div id="lifegame-control-23-19"></div><div id="lifegame-control-23-20"></div><div id="lifegame-control-23-21"></div><div id="lifegame-control-23-22"></div><div id="lifegame-control-23-23"></div><div id="lifegame-control-23-24"></div><div id="lifegame-control-23-25"></div><div id="lifegame-control-23-26"></div><div id="lifegame-control-23-27"></div><div id="lifegame-control-23-28"></div><div id="lifegame-control-23-29"></div><div id="lifegame-control-24-0"></div><div id="lifegame-control-24-1"></div><div id="lifegame-control-24-2"></div><div id="lifegame-control-24-3"></div><div id="lifegame-control-24-4"></div><div id="lifegame-control-24-5"></div><div id="lifegame-control-24-6"></div><div id="lifegame-control-24-7"></div><div id="lifegame-control-24-8"></div><div id="lifegame-control-24-9"></div><div id="lifegame-control-24-10"></div><div id="lifegame-control-24-11"></div><div id="lifegame-control-24-12"></div><div id="lifegame-control-24-13"></div><div id="lifegame-control-24-14"></div><div id="lifegame-control-24-15"></div><div id="lifegame-control-24-16"></div><div id="lifegame-control-24-17"></div><div id="lifegame-control-24-18"></div><div id="lifegame-control-24-19"></div><div id="lifegame-control-24-20"></div><div id="lifegame-control-24-21"></div><div id="lifegame-control-24-22"></div><div id="lifegame-control-24-23"></div><div id="lifegame-control-24-24"></div><div id="lifegame-control-24-25"></div><div id="lifegame-control-24-26"></div><div id="lifegame-control-24-27"></div><div id="lifegame-control-24-28"></div><div id="lifegame-control-24-29"></div><div id="lifegame-control-25-0"></div><div id="lifegame-control-25-1"></div><div id="lifegame-control-25-2"></div><div id="lifegame-control-25-3"></div><div id="lifegame-control-25-4"></div><div id="lifegame-control-25-5"></div><div id="lifegame-control-25-6"></div><div id="lifegame-control-25-7"></div><div id="lifegame-control-25-8"></div><div id="lifegame-control-25-9"></div><div id="lifegame-control-25-10"></div><div id="lifegame-control-25-11"></div><div id="lifegame-control-25-12"></div><div id="lifegame-control-25-13"></div><div id="lifegame-control-25-14"></div><div id="lifegame-control-25-15"></div><div id="lifegame-control-25-16"></div><div id="lifegame-control-25-17"></div><div id="lifegame-control-25-18"></div><div id="lifegame-control-25-19"></div><div id="lifegame-control-25-20"></div><div id="lifegame-control-25-21"></div><div id="lifegame-control-25-22"></div><div id="lifegame-control-25-23"></div><div id="lifegame-control-25-24"></div><div id="lifegame-control-25-25"></div><div id="lifegame-control-25-26"></div><div id="lifegame-control-25-27"></div><div id="lifegame-control-25-28"></div><div id="lifegame-control-25-29"></div><div id="lifegame-control-26-0"></div><div id="lifegame-control-26-1"></div><div id="lifegame-control-26-2"></div><div id="lifegame-control-26-3"></div><div id="lifegame-control-26-4"></div><div id="lifegame-control-26-5"></div><div id="lifegame-control-26-6"></div><div id="lifegame-control-26-7"></div><div id="lifegame-control-26-8"></div><div id="lifegame-control-26-9"></div><div id="lifegame-control-26-10"></div><div id="lifegame-control-26-11"></div><div id="lifegame-control-26-12"></div><div id="lifegame-control-26-13"></div><div id="lifegame-control-26-14"></div><div id="lifegame-control-26-15"></div><div id="lifegame-control-26-16"></div><div id="lifegame-control-26-17"></div><div id="lifegame-control-26-18"></div><div id="lifegame-control-26-19"></div><div id="lifegame-control-26-20"></div><div id="lifegame-control-26-21"></div><div id="lifegame-control-26-22"></div><div id="lifegame-control-26-23"></div><div id="lifegame-control-26-24"></div><div id="lifegame-control-26-25"></div><div id="lifegame-control-26-26"></div><div id="lifegame-control-26-27"></div><div id="lifegame-control-26-28"></div><div id="lifegame-control-26-29"></div><div id="lifegame-control-27-0"></div><div id="lifegame-control-27-1"></div><div id="lifegame-control-27-2"></div><div id="lifegame-control-27-3"></div><div id="lifegame-control-27-4"></div><div id="lifegame-control-27-5"></div><div id="lifegame-control-27-6"></div><div id="lifegame-control-27-7"></div><div id="lifegame-control-27-8"></div><div id="lifegame-control-27-9"></div><div id="lifegame-control-27-10"></div><div id="lifegame-control-27-11"></div><div id="lifegame-control-27-12"></div><div id="lifegame-control-27-13"></div><div id="lifegame-control-27-14"></div><div id="lifegame-control-27-15"></div><div id="lifegame-control-27-16"></div><div id="lifegame-control-27-17"></div><div id="lifegame-control-27-18"></div><div id="lifegame-control-27-19"></div><div id="lifegame-control-27-20"></div><div id="lifegame-control-27-21"></div><div id="lifegame-control-27-22"></div><div id="lifegame-control-27-23"></div><div id="lifegame-control-27-24"></div><div id="lifegame-control-27-25"></div><div id="lifegame-control-27-26"></div><div id="lifegame-control-27-27"></div><div id="lifegame-control-27-28"></div><div id="lifegame-control-27-29"></div><div id="lifegame-control-28-0"></div><div id="lifegame-control-28-1"></div><div id="lifegame-control-28-2"></div><div id="lifegame-control-28-3"></div><div id="lifegame-control-28-4"></div><div id="lifegame-control-28-5"></div><div id="lifegame-control-28-6"></div><div id="lifegame-control-28-7"></div><div id="lifegame-control-28-8"></div><div id="lifegame-control-28-9"></div><div id="lifegame-control-28-10"></div><div id="lifegame-control-28-11"></div><div id="lifegame-control-28-12"></div><div id="lifegame-control-28-13"></div><div id="lifegame-control-28-14"></div><div id="lifegame-control-28-15"></div><div id="lifegame-control-28-16"></div><div id="lifegame-control-28-17"></div><div id="lifegame-control-28-18"></div><div id="lifegame-control-28-19"></div><div id="lifegame-control-28-20"></div><div id="lifegame-control-28-21"></div><div id="lifegame-control-28-22"></div><div id="lifegame-control-28-23"></div><div id="lifegame-control-28-24"></div><div id="lifegame-control-28-25"></div><div id="lifegame-control-28-26"></div><div id="lifegame-control-28-27"></div><div id="lifegame-control-28-28"></div><div id="lifegame-control-28-29"></div><div id="lifegame-control-29-0"></div><div id="lifegame-control-29-1"></div><div id="lifegame-control-29-2"></div><div id="lifegame-control-29-3"></div><div id="lifegame-control-29-4"></div><div id="lifegame-control-29-5"></div><div id="lifegame-control-29-6"></div><div id="lifegame-control-29-7"></div><div id="lifegame-control-29-8"></div><div id="lifegame-control-29-9"></div><div id="lifegame-control-29-10"></div><div id="lifegame-control-29-11"></div><div id="lifegame-control-29-12"></div><div id="lifegame-control-29-13"></div><div id="lifegame-control-29-14"></div><div id="lifegame-control-29-15"></div><div id="lifegame-control-29-16"></div><div id="lifegame-control-29-17"></div><div id="lifegame-control-29-18"></div><div id="lifegame-control-29-19"></div><div id="lifegame-control-29-20"></div><div id="lifegame-control-29-21"></div><div id="lifegame-control-29-22"></div><div id="lifegame-control-29-23"></div><div id="lifegame-control-29-24"></div><div id="lifegame-control-29-25"></div><div id="lifegame-control-29-26"></div><div id="lifegame-control-29-27"></div><div id="lifegame-control-29-28"></div><div id="lifegame-control-29-29"></div>';

  LifeGameControlHTML += '</div>';

  LifeGameControlHTML += '</section>';

  jQuery(function($) {
    var fn, i, j, _i, _results;
    $("#contents").after(LifeGameControlHTML);
    _results = [];
    for (i = _i = 0; _i <= 29; i = ++_i) {
      _results.push((function() {
        var _j, _results1;
        _results1 = [];
        for (j = _j = 0; _j <= 29; j = ++_j) {
          fn = (function(lifeGameId, lifeGameControlId) {
            return function() {
              $(lifeGameId).attr("isLive", "true").removeClass("lifegame-live lifegame-dead").addClass("lifegame-born");
              return $(lifeGameControlId).removeClass("lifegame-control-dead").addClass("lifegame-control-live");
            };
          })("#lifegame-" + i + "-" + j, "#lifegame-control-" + i + "-" + j);
          _results1.push($("#lifegame-control-" + i + "-" + j).mousemove(fn));
        }
        return _results1;
      })());
    }
    return _results;
  });

  jQuery(function($) {
    var css;
    css = CSS_PATTERNS[parseInt(Math.random() * CSS_PATTERNS.length)];
    return $("head").append("<link rel='stylesheet' type='text/css' href='" + css + "' />");
  });

  jQuery(function($) {
    var i, index, initialPattern, j, _i, _len, _results;
    initialPattern = INITIAL_PATTERNS[parseInt(Math.random() * INITIAL_PATTERNS.length)];
    _results = [];
    for (_i = 0, _len = initialPattern.length; _i < _len; _i++) {
      index = initialPattern[_i];
      i = index[0];
      j = index[1];
      $("#lifegame-" + i + "-" + j).attr("isLive", "true").removeClass("lifegame-dead").addClass("lifegame-live");
      _results.push($("#lifegame-control-" + i + "-" + j).addClass("lifegame-control-live"));
    }
    return _results;
  });

  jQuery(function($) {
    var cellList, i, j, lifeGame, whenBorn, whenDead, whenLive, _i, _j;
    cellList = [];
    whenBorn = function(cell) {
      $(cell).attr("isLive", "true").removeClass("lifegame-dead").addClass("lifegame-born");
      return $(cell.replace("lifegame", "lifegame-control")).removeClass("lifegame-control-dead").addClass("lifegame-control-live");
    };
    whenLive = function(cell) {
      $(cell).removeClass("lifegame-born").addClass("lifegame-live");
      return $(cell.replace("lifegame", "lifegame-control")).removeClass("lifegame-control-dead").addClass("lifegame-control-live");
    };
    whenDead = function(cell) {
      $(cell).attr("isLive", "false").removeClass("lifegame-live lifegame-born").addClass("lifegame-dead");
      console.log(cell.replace("lifegame", "lifegame-control"));
      return $(cell.replace("lifegame", "lifegame-control")).removeClass("lifegame-control-live").addClass("lifegame-control-dead");
    };
    for (i = _i = 0; _i <= 29; i = ++_i) {
      for (j = _j = 0; _j <= 29; j = ++_j) {
        cellList.push(new LifeGame.Cell("#lifegame-" + i + "-" + j, ["#lifegame-" + (i + 1) + "-" + j, "#lifegame-" + (i - 1) + "-" + j, "#lifegame-" + (i + 1) + "-" + (j + 1), "#lifegame-" + (i - 1) + "-" + (j + 1), "#lifegame-" + (i + 1) + "-" + (j - 1), "#lifegame-" + (i - 1) + "-" + (j - 1), "#lifegame-" + i + "-" + (j + 1), "#lifegame-" + i + "-" + (j - 1)], whenBorn, whenLive, whenDead));
      }
    }
    lifeGame = new LifeGame.LifeGame(cellList);
    return setInterval((function() {
      return LifeGame.update(lifeGame);
    }), 200.0);
  });

}).call(this);
