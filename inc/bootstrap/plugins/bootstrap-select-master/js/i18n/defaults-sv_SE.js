/*
 * Translated default messages for bootstrap-select.
 * Locale: SV (Swedish)
 * Region: SE (Sweden)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Inget valt',
    noneResultsText: 'Inget s�kresultat matchar {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected === 1) ? "{0} alternativ valt" : "{0} alternativ valda";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        'Gr�ns uppn�d (max {n} alternativ)',
        'Gr�ns uppn�d (max {n} gruppalternativ)'
      ];
    },
    selectAllText: 'Markera alla',
    deselectAllText: 'Avmarkera alla',
    multipleSeparator: ', '
  };
})(jQuery);
