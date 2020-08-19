import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarWeek,
  faCog,
  faAddressBook,
  faIdBadge,
  faPodcast,
  faSpinner,
  faChartLine,
  faChalkboardTeacher,
  faBed,
  faTasks,
  faMountain
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* Main ProPlayer Icons */
library.add(faCalendarWeek);
library.add(faCog);
library.add(faAddressBook);
library.add(faIdBadge);
library.add(faPodcast);
library.add(faSpinner);
library.add(faChartLine);
library.add(faChalkboardTeacher);
library.add(faBed);
library.add(faTasks);
library.add(faMountain);

Vue.component("font-awesome-icon", FontAwesomeIcon);
