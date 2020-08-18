import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarWeek,
  faCog,
  faAddressBook,
  faIdBadge
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* Main ProPlayer Icons */
library.add(faCalendarWeek);
library.add(faCog);
library.add(faAddressBook);
library.add(faIdBadge);

Vue.component("font-awesome-icon", FontAwesomeIcon);
