import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

import Button from "./Button.vue";

storiesOf("Button", module).add("Button as a component", () => ({
  components: { Button },
  template: "<button>button as component</button>",
  methods: { action: action("clicked") }
}));
