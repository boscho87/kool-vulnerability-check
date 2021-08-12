/*
 * Translated default messages for bootstrap-select.
 * Locale: FR (French; Fran�ais)
 * Region: FR (France)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Aucune s�lection',
    noneResultsText: 'Aucun r�sultat pour {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected > 1) ? "{0} �l�ments s�lectionn�s" : "{0} �l�ment s�lectionn�";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll > 1) ? 'Limite atteinte ({n} �l�ments max)' : 'Limite atteinte ({n} �l�ment max)',
        (numGroup > 1) ? 'Limite du groupe atteinte ({n} �l�ments max)' : 'Limite du groupe atteinte ({n} �l�ment max)'
      ];
    },
    multipleSeparator: ', ',
    selectAllText: 'Tout s�lectionner',
    deselectAllText: 'Tout d�s�lectionner',
  };
})(jQuery);
