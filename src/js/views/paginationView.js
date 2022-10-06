import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      handler(+btn.dataset.page);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Page 1, other pages
    if (curPage === 1 && numPages > 1) {
      const markup = `
        <button class="btn--inline pagination__btn--next" data-page="${2}">
          <span>Page 2</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>`;
      return markup;
    }
    // Last page
    if (curPage === numPages) {
      const markup = `
        <button class="btn--inline pagination__btn--prev" data-page="${
          numPages - 1
        }">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${numPages - 1}</span>
        </button>`;
      return markup;
    }
    // Other page
    if (curPage < numPages) {
      const markup = `
        <button class="btn--inline pagination__btn--prev" data-page="${
          curPage - 1
        }">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
        <button class="btn--inline pagination__btn--next" data-page="${
          curPage + 1
        }">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>`;
      return markup;
    }
    return '';
  }
}

export default new PaginationView();
