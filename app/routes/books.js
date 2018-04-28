import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('book');
  },

  actions: {

    editAuthor(author) {
      author.set('isAuthorEditing', true);
    },

    cancelAuthorEdit(author) {
      author.set('isAuthorEditing', false);
      author.rollbackAttributes();
    },

    saveAuthor(author) {

      if (author.get('isAuthorNotValid')) {
        return;
      }

      author.set('isAuthorEditing', false);
      author.save();
    },

    editTitle(title) {
      title.set('isTitleEditing', true);
    },

    cancelTitleEdit(title) {
      title.set('isTitleEditing', false);
      title.rollbackAttributes();
    },

    saveTitle(title) {

      if (title.get('isTitleNotValid')) {
        return;
      }

      title.set('isTitleEditing', false);
      title.save();
    },

    editLibrary(library) {
      library.set('isLibraryEditing', true);
    },

    cancelLibraryEdit(library) {
      library.set('isLibraryEditing', false);
      library.rollbackAttributes();
    },

    saveLibrary(library) {

      if (library.get('isLibraryNotValid')) {
        return;
      }

      library.set('isLibraryEditing', false);
      library.save();
    }
  }
});
