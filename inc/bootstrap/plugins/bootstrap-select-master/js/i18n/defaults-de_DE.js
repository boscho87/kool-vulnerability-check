/*
 * Translated default messages for bootstrap-select.
 * Locale: DE (German, deutsch)
 * Region: DE (Germany, Deutschland)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Bitte w�hlen...',
    noneResultsText: 'Keine Ergebnisse f�r {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} Element ausgew�hlt" : "{0} Elemente ausgew�hlt";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Limit erreicht ({n} Element max.)' : 'Limit erreicht ({n} Elemente max.)',
        (numGroup == 1) ? 'Gruppen-Limit erreicht ({n} Element max.)' : 'Gruppen-Limit erreicht ({n} Elemente max.)'
      ];
    },
    selectAllText: 'Alles ausw�hlen',
    deselectAllText: 'Nichts ausw�hlen',
    multipleSeparator: ', '
  };
})(jQuery);
