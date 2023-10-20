$(document).ready(function() {
  function loadMoreTransactions() {
      if (parseInt(currentPage) >= parseInt(totalPages)) {
          return;
      }

      currentPage = parseInt(currentPage) + 1;

      $.get(window.location.href + "?page=" + currentPage, function (data) {
          const newTransactions = $(data).find(".transaction");
          $(".transaction").last().after(newTransactions);
      });
  }

  const $transactionsTable = $("#transactions-table");

  $transactionsTable.scroll(function () {
      if (
          $transactionsTable.scrollTop() + $transactionsTable.innerHeight() >=
          $transactionsTable[0].scrollHeight - 100
      ) {
          loadMoreTransactions();
      }
  });
});