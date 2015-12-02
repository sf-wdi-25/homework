// wait for DOM to load before running JS
$(document).ready(function() {

  console.log('JS is loaded!'); // sanity check
  var urlBasic = "https://super-crud.herokuapp.com/books/";
  var dataList = {};
  function listBook(book) {
    $('#books-list').prepend(
      '<div class="bookHolder" data-id="' + book._id + '">' +
        '<div class="row">' +
          '<div class="col-xs-4">' +
            '<img src="' +book.image+ '" class="img-responsive">' +
          '</div>' +
          '<div class="col-xs-8">' +
            '<p><strong>Title: </strong>' + book.title + '</p>' +
            '<p><strong>Author: </strong>' + book.author + '</p>' +
            '<p><strong>Release: </strong>' + book.releaseDate + '</p>' +
            '<button type="button" class="btn btn-default edit" dataID="' + book._id + '">Edit</button>' +
            '<button type="button" class="btn btn-default delete" dataID="' + book._id + '">Delete</button>' +
          '</div>' +
        '</div>' +
        '<hr>' +
      '</div>'
    );
  }

  function addBook() {
    var title = $('#subTitle').val();
    var author = $('#subAuthor').val();
    var image = $('#subImage').val();
    var date = $('#subDate').val();
    $.ajax({
      method: 'POST',
      url: urlBasic,
      data: {
        title: title,
        author: author,
        image: image,
        releaseDate: date
      },
      success: function (data) {
        console.log("Add Book!");
        listBook(data);
      },
      error: function () {
        console.log("Fail to add book!");
      }
    });
  }

  function deleteBook(id) {
    $.ajax({
      method: 'DELETE',
      url: urlBasic + id,
      success: function (data) {
        console.log("Delete Book!");
        $('div[data-id='+id+']').remove();
      },
      error: function () {
        console.log("Fail to delete book!");
      }
    });
  }

  function editBook(id) {
    var title = $('#edTitle').val();
    var author = $('#edAuthor').val();
    var image = $('#edImage').val();
    var date = $('#edDate').val();
    $.ajax({
      method: 'PUT',
      url: urlBasic + id,
      data: {
        title: title,
        author: author,
        image: image,
        releaseDate: date
      },
      success: function (data) {
        console.log("Edit Book!");
        $('.editForm').remove();
        // $('div[data-id='+id+']').remove();
      },
      error: function () {
        console.log("Fail to edit book!");
      }
    });
  }
  // first load the page
  $.ajax({
    method: 'GET',
    url: urlBasic,
    success: function (data) {
      data.books.forEach(listBook);
      dataList = data;
      console.log(dataList);
    }
  });

  $('#submit').on('click', function (event) {
    event.preventDefault();
    addBook();
  });

  $('#books-list').on('click', '.delete', function (event) {
    var id = $(this).attr('dataID');
    deleteBook(id);
  });

  $('#books-list').on('click', '.edit', function (event) {
    var id = $(this).attr('dataID');
    $.ajax({
      method: 'GET',
      url: urlBasic + id,
      success: function (response) {
        $('div[data-id='+id+']').append(
          '<div class="row">' +
            '<form class="editForm">' +
              '<input type="text" class="form-control" id="edTitle" value="'+ response.title +'">' +
              '<input type="text" class="form-control" id="edAuthor" value="'+ response.author +'">' +
              '<input type="text" class="form-control" id="edImage" value="'+ response.image +'">' +
              '<input type="text" class="form-control" id="edDate" value="'+ response.releaseDate +'">' +
              '<button type="submit" class="btn btn-default btn-block" id="edit" dataID="' + response._id + '">Edit</button>' +
            '<br><hr></form>' +
          '</div>'
        );
      }
    });
  });

  $('#books-list').on('click', '#edit', function (event) {
    event.preventDefault();
    var id = $(this).attr('dataID');
    editBook(id);
  });

});
