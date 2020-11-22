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

<style lang="scss"></style>
