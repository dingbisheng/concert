$(document).ready(function (e) {
  var win = window, 
      doc = document, 
      ifmwin = null,
      $ifm = null,
      $ifmdoc = null, 
      $map = null, 
      $mapview = $('#mapview'),
      $mapmask = null;

  window.dm_mapview = {
    show: function () {
      var z = maxz();

      $mapmask.css({'z-index': z + 1});

      $mapview.show().css({'z-index': z + 2});

      $map.show();

      resize();
    },
    hide: function () {
      $mapview.hide().css({'z-index': 0});
    }
  };

  dm_mapview.hide();

  $mapview.on('load', function () {
    ifmwin = $(this)[0].contentWindow;

    $ifm = $(this);
    $ifmdoc = $(this).contents();
    $map = $ifmdoc.find('.m-map');
    $mapmask = $ifmdoc.find('.m-mask');

    $(win).on('resize', resize);

    dm_mapview.hide();
  });

  function maxz(context) {
    var result = [], elements = (context || doc).getElementsByTagName('*'), i = elements.length;

    while (i--) result.push($(elements[i]).css('z-index') >> 0);

    return Math.max.apply(this, result);
  }

  function resize() {
    var mapw = $(win).width() - 100,
        maph = $(win).height() - 100,
        mapl = 0,
        mapt = 0,
        z = maxz();

    if (mapw < 700) mapw = 700;
    if (maph < 550) maph = 550;

    mapl = Math.round(($(win).width() - mapw) / 2);
    mapt = Math.round(($(win).height() - maph - parseInt($map.css('padding-top')) - parseInt($map.css('padding-bottom'))) / 2);

    if (mapl < 0) mapl = 0;
    if (mapt < 0) mapt = 0;

    $map.css({
      'width': mapw,
      'height': maph,
      'left': mapl,
      'top': mapt,
      'margin-left': 0,
      'margin-top': 0
    });

    $mapview.css({
      'position': 'fixed',
      '_position': 'absolute',
      'width': Math.max($(win).width(), $(doc).width()),
      'height': Math.max($(win).height(), $(doc).height()),
      'top': 0,
      'left': 0,
      'margin-left': 0,
      'margin-top': 0
    });

    $mapmask.css({
      'width': Math.max($(win).width(), $(doc).width()),
      'height': Math.max($(win).height(), $(doc).height()),
      'left': 0,
      'top': 0
    });

    ifmwin.map.setAroundSize();
    ifmwin.map.setRouteSize();

    // 刷新周边高度

    /*if (utlis.css(this.elms.listType, 'display') === 'block') {
      listTypeHeight = utlis.outerHeight(this.elms.listType, true);
    }
    
    mapSdHeight = this.elms.mapSd.offsetHeight;
    pageMiniHeight = this.elms.pageMini.offsetHeight;
    aroundTitleHeight = this.elms.aroundTitle.offsetHeight;
    aroundSearchHeight = this.elms.aroundSearch.offsetHeight;

    var h = mapSdHeight - aroundSearchHeight - aroundTitleHeight - listTypeHeight - pageMiniHeight;

    utlis.height(this.elms.aroundList, h);*/
  }
});