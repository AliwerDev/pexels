import axios from "axios";

const API_KEY = "563492ad6f91700001000001d8e30e5a76444c43bf4e3be9cfa053e8";
const pageIndex = 1;

const instanceAxios = axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    common: {
      Authorization: API_KEY,
    },
  },
});

export const getImg = async (index) => {
  try {
    const res = await instanceAxios.get(`curated?page=${index}&per_page=30`);

    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};

export const searchImg = async (page, value) => {
  try {
    const res = await instanceAxios.get(
      `search?query=${value}&page=${page}&per_page=20`
    );

    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};

// class PhotoGallery{
//     constructor(){
//         this.;
//         // this.galleryDIv = document.querySelector('#apiGallery');
//         // this.searchForm = document.querySelector('.search-form');
//         // this.loadMore = document.querySelector('.load-more');
//         this.pageIndex = 1;
//         this.searchValueGlobal = '';
//         this.eventHandle();
//     }
//     eventHandle(){
//         // document.addEventListener('DOMContentLoaded',()=>{
//         //     this.getImg(1);
//         // });
//         this.searchForm.addEventListener('submit', (e)=>{
//             this.pageIndex = 1;
//             // readMore.classList.remove("d-none")
//             // brand.classList.add("d-none");
//             this.getSearchedImages(e);
//         });
//         this.loadMore.addEventListener('click', (e)=>{
//             this.loadMoreImages(e);
//         })
//         this.logo.addEventListener('click',
//             () => {
//                 this.pageIndex = 1;
//                 brand.classList.remove("d-none");
//                 readMore.classList.remove("d-none")
//                 this.galleryDIv.innerHTML = '';
//                 imgGallery.classList.add("d-none")
//                 apiGallery.classList.remove("d-none")
//                 this.getImg(this.pageIndex);
//                 openAllGallery();
//             })
//     }

//     async fetchImages(baseURL){
//         const response = await fetch(baseURL, {
//             method: 'GET',
//             headers: {
// Accept: 'application/json',
//                 Authorization: this.API_KEY
//             }
//         });
//         const data = await response.json();
//         return data;
//     }
//     GenerateHTML(photos){
//         shuffle(photos).forEach(photo=>{
//             const item= document.createElement('div');
//             item.classList.add('item');
//             item.innerHTML = `
//           <a href='${photo.src.original}' target="_blank">
//             <img src="${photo.src.medium}">
//             <h3 href=''>${photo.photographer}</h3>
//           </a>
//       `;
//             this.galleryDIv.appendChild(item)
//         })
//     }
//     async getSearchedImages(e){
//         this.loadMore.setAttribute('data-img', 'search');
//         e.preventDefault();
//         imgGallery.classList.add("d-none")
//         apiGallery.classList.remove("d-none")
//         imgGallery.classList.add("d-none")
//         apiGallery.classList.remove("d-none")
//         imgGallery.classList.add("d-none")
//         apiGallery.classList.remove("d-none")
//         this.galleryDIv.innerHTML='';
//         const searchValue = e.target.querySelector('.search-form input').value.trim();
//         this.searchValueGlobal = searchValue;
//         const baseURL = `https://api.pexels.com/v1/search?query=${searchValue}&page=1&per_page=12`
//         const data = await this.fetchImages(baseURL);

//         if(searchValue === "" || data.photos.length === 0){
//             imgGallery.classList.add("d-none")
//             apiGallery.classList.remove("d-none")
//             this.galleryDIv.innerHTML = `<h3 class="text-danger text-center">Nothing found</h3>`;
//             e.target.reset();
//             return;
//         }

//         this.GenerateHTML(data.photos);
//         e.target.reset();
//     }
//     async getMoreSearchedImages(index){
//         const baseURL = `https://api.pexels.com/v1/search?query=${this.searchValueGlobal}&page=${index}&per_page=12`
//         const data = await this.fetchImages(baseURL);
//         this.GenerateHTML(data.photos);
//     }
//     loadMoreImages(e){
//         let index = ++this.pageIndex;
//         const loadMoreData = e.target.getAttribute('data-img');
//         if(loadMoreData === 'curated'){
//             // load next page for curated]
//             this.getImg(index)
//         }else{
//             // load next page for search
//             this.getMoreSearchedImages(index);
//         }
//     }
// }
