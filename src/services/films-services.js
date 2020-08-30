export default class FilmsServices {
  apiBase = 'https://films.dimonwhite.ru/';

  async getFilms() {
    const response = await fetch(`${this.apiBase}films.json`);

    if (!response.ok) {
      throw new Error(`Could not fetch films, ${response.status}`);
    }

    const films = await response.json();

    return films;
  }

  onloadImagePromise = (img) => new Promise((resolve, reject) => {
    // eslint-disable-next-line no-param-reassign
    img.onload = () => resolve(img);
    // eslint-disable-next-line no-param-reassign
    img.onerror = reject;
  });

  async getImage(src) {
    const img = new Image();
    const imgPromise = this.onloadImagePromise(img);
    img.src = `${this.apiBase}${src}`;
    await imgPromise;
    return img.src;
  }

  getSoundtrack(src) {
    return `${this.apiBase}${src}`;
  }
}
