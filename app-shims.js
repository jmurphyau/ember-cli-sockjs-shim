(function() {
  /* globals define, SockJS */

  function sockJSModule() {
    'use strict';

    return SockJS;
  }

  define('sockjs', [], sockJSModule);

})();
