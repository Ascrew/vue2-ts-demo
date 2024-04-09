<!--
 * @Date: 2024-03-01 15:11:24
 * @LastEditors: Please set LastEditors
 * @Description: 政策智库-图集详情页面
 * @FilePath: src\views\archives-smart-library\collection\more\components\picture-detail\index.vue
-->
<template>
  <main class="picture-detail">
    <button @click="onChangeTest">test</button>
    <div class="picture">
      <swiper class="swiper" :options="swiperOption" ref="swiperTop">
        <swiper-slide
          v-for="(item, index) in mediaList"
          :key="item.title + index"
        >
          <img class="thumbnail-pic" :src="item.url" />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination picture-detail--swiper-pagination"></div>
    </div>

    <div class="thumbnail">
      <swiper
        class="swiper"
        :options="thumbnailSwiperOption"
        ref="swiperThumbs"
      >
        <swiper-slide
          v-for="(item, index) in mediaList"
          :key="item.title + index"
        >
          <div class="pic-wrapper">
            <img class="one-box--pic" :src="item.url" alt="" />
          </div>
        </swiper-slide>
      </swiper>
      <div
        class="swiper-button-prev project-library--swiper-button-prev"
        slot="button-prev"
      ></div>
      <div
        class="swiper-button-next project-library--swiper-button-next"
        slot="button-prev"
      ></div>

      <div class="swiper-footer"></div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
@Component({
  name: 'PictureDetail',
  components: {
    Swiper,
    SwiperSlide
  }
})
export default class extends Vue {
  @Prop({})
  row!: any;

  public swiperTop: any = null;
  public swiperThumbs: any = null;

  mounted() {
    this.$nextTick(() => {
      this.swiperTop = (this.$refs.swiperTop as any).$swiper;
      this.swiperThumbs = (this.$refs.swiperThumbs as any).$swiper;
      // swiperTop.params.control = swiperThumbs;
      // swiperThumbs.params.control = swiperTop;
    });
  }

  public mediaList: any[] = [
    {
      title: '专题1',
      url: 'https://pic2.zhimg.com/v2-4c02f9e56514e9a74e2f940daafdb9c9_b.jpg'
    },
    {
      title: '专题2',
      url: 'https://pic.allhistory.com/T1XzECBmZT1RCvBVdK.jpeg'
    },
    {
      title: '专题3',
      url: 'https://pic.allhistory.com/T1XXhCB4LT1RCvBVdK.jpeg'
    },
    {
      title: '专题4',
      url: 'https://pic.allhistory.com/T1waWCB7YT1RCvBVdK.jpeg'
    },
    {
      title: '专题5',
      url: 'https://pic.allhistory.com/T1ezhCB_dT1RCvBVdK.jpeg'
    },
    {
      title: '专题6',
      url: 'https://pic.allhistory.com/T1XyLCBCbT1RCvBVdK.jpeg'
    },
    {
      title: '专题7',
      url: 'https://pic.allhistory.com/T1GRWCBmAT1RCvBVdK.jpeg'
    },
    {
      title: '专题8',
      url: 'https://pic.allhistory.com/T1MXxCB5ET1RCvBVdK.jpeg'
    }
  ];

  public onChangeSwiperThumbnail(swiper: any) {
    if (this.swiperThumbs) {
      this.swiperThumbs.slideTo(swiper.realIndex + 4, 500, false);
    }
  }

  public swiperOption: any = {
    loop: true,
    lazy: true,
    spaceBetween: 10,
    loopSlides: 8,
    pagination: '.picture-detail--swiper-pagination',
    paginationType: 'fraction',
    onSlideChangeEnd: (swiper: any) => this.onChangeSwiperThumbnail(swiper)
  };

  public onChangeSwiperTop(swiper: any) {
    if (this.swiperTop) {
      this.swiperTop.slideTo(swiper.realIndex + 1, 500, false);
    }
  }
  public thumbnailSwiperOption = {
    loop: true,
    lazy: true,
    centeredSlides: true,
    slidesPerView: 4,
    loopSlides: 8,
    spaceBetween: 20,
    slideToClickedSlide: true,
    prevButton: '.project-library--swiper-button-prev',
    nextButton: '.project-library--swiper-button-next',
    onSlideChangeEnd: (swiper: any) => this.onChangeSwiperTop(swiper)
  };
  public onChangeTest() {
    if (this.swiperThumbs) {
      this.swiperThumbs.slideTo(4, 500, false);
    }
  }
}
</script>
<style lang="stylus" scoped>
.picture-detail {
  width: 1200px;
  padding: 100px 0 20px 0;
  margin: 0 auto;

  .picture {
    width: 720px;
    height: 430px;
    padding-bottom: 30px;
    margin: 20px auto 0;
    position: relative;

    >>> .swiper-container {
      height: 100%;
      width: 100%;
      border-radius: 12px;

      .thumbnail-pic {
        width: 100%;
        height: 100%;
        border-radius: 12px;
      }
    }

    >>> .swiper-pagination {
      width: 100%;
      bottom: 0;
      line-height: 24px;
      font-size: 16px;
      color: #041F34;
    }
  }

  >>> .thumbnail {
    position: relative;
    margin-top: 16px;
    padding: 0 60px;

    .swiper-container {
      .swiper-slide-active {
        .one-box--pic {
          border: 2px solid #058373;
        }
      }

      .pic-wrapper {
        padding-bottom: 55%;
        width: 100%;
        height: 0;
        position: relative;
        cursor: pointer;

        .one-box--pic {
          height: 100%;
          width: 100%;
          position: absolute;
          left: 0;
          object-fit: cover;
          object-position: center;
          border-radius: 12px;
        }

        .one-box--title {
          height: 24px;
          padding-left: 6px;
          font-size: 18px;
          font-weight: 500;
          color: #3E3D44;
          line-height: 24px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  .swiper-button-prev, .swiper-button-next {
    position: absolute;
    width: 26px;
    height: 46px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    &:after {
      display: none;
    }
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-button-next {
    right: 0;
  }
}
</style>
