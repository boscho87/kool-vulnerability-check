/*
 * Translated default messages for bootstrap-select.
 * Locale: HU (Hungarian)
 * Region: HU (Hungary)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'V�lasszon!',
    noneResultsText: 'Nincs tal�lat {0}',
    countSelectedText: function (numSelected, numTotal) {
      return '{0} elem kiv�lasztva';
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        'Legfeljebb {n} elem v�laszthat�',
        'A csoportban legfeljebb {n} elem v�laszthat�'
      ];
    },
    selectAllText: 'Mind',
    deselectAllText: 'Egyik sem',
    multipleSeparator: ', '
  };
})(jQuery);
