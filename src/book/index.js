import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

import Button from "./Button.vue";
import Input from "./input/Input.vue";

const PGMButton = () => ({
  components: { Button },
  template: "<button>button as component</button>",
  methods: { action: action("clicked") }
});

const PGMInput = () => ({
  components: { Input },
  template: "<input></input>"
});

storiesOf("Components", module)
  .add("Button", PGMButton)
  .add("Input", PGMInput);
