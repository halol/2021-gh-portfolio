<template>
  <div class="slice-mockups" :style="{ background: color }">
    <div class="scroll-crop">
      <vuescroll :ops="ops" ref="vs">
        <div class="mockups-flex-container">
          <div
            class="mockup-container"
            v-for="(item, index) in slice.items"
            :key="item.id"
            :id="'mockup-' + index"
          >
            <img
              class="mockup_image"
              :src="item.mockup_image.url"
              :alt="renderAlt"
              draggable="false"
            />
          </div>
        </div>
      </vuescroll>
    </div>
    <div class="mockup-description">
      icon - description {{ selectedMockup }}
    </div>
    <div class="mockup-toggle">
      <button
        class="button-toggle-mockup"
        v-for="(item, index) in slice.items"
        :key="index"
        @click="scrollToMockup(index)"
        :class="{ active: isSelectedMockup(index) }"
      >
        Go to {{ index }}
      </button>
    </div>
  </div>
</template>

<script>
import vuescroll from "vuescroll";

export default {
  props: ["slice", "color"],
  data() {
    return {
      selectedMockup: 0,
      ops: {
        bar: {
          disable: true
        },
        scrollPanel: {
          scrollingX: true,
          scrollingY: false,
          speed: 300,
          easing: "easeInQuad",
          verticalNativeBarPos: "right"
        },
        vuescroll: {
          mode: "native",
          detectResize: false,
          wheelDirectionReverse: true
        }
      }
    };
  },
  components: {
    vuescroll
  },
  methods: {
    scrollToMockup(item) {
      const { scrollTop, scrollLeft } = this.$refs["vs"].getPosition();
      this.selectedMockup = item;
      if (item == 0) {
        this.$refs["vs"].scrollTo({
          x: 0
        });
      } else {
        this.$refs["vs"].scrollIntoView(`#mockup-${item}`, 500);
      }
      console.log(scrollTop, scrollLeft);
    },
    isSelectedMockup(index) {
      return this.selectedMockup == index;
    }
  },
  computed: {
    renderAlt() {
      return "Alt";
      // item.mockup_caption[0].text
    }
  }
};
</script>

<style lang="scss">
.slice-mockups {
  margin: 0 -96px;
  @include sm {
    margin: 0 -1em;
  }
}
.button-toggle-mockup {
  //border: none;
  border-radius: 2em;
  width: 5em;
  height: 3em;
  &.active,
  &:focus {
    border-color: blue;
    border-width: 2px;
  }
}

.scroll-crop {
  height: calc(800px - 5px);
  @include sm {
    height: 50vh;
  }
  overflow: hidden;
}
.mockup-toggle {
  display: flex;
  justify-content: center;
}
.mockups-scroll {
  background: rgba(teal, 0.2);
  // padding: 0 96px;
  @include sm {
    padding: 0 1em;
  }
}
.mockups-flex-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0 96px;
  @include sm {
    padding: 0 1em;
  }
}
.mockup-container {
  background: rgba(orange, 0.3);
  &:not(:last-child) {
    margin-right: 96px;
  }
}
.mockup_image {
  display: block;
  user-select: none;
  height: 800px;
  @include sm {
    height: 50vh;
    width: auto;
  }
}
</style>
