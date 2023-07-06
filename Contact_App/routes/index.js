import MyContacts from "../views/Mycontact/MyContacts";
import CreateContact from "../views/CreateNewContact/CreateContact";
import Favourite from "../views/Favourite/Favourite";

import StackNavigator from '../components/StackNavigator';

const APP_ROUTES = {
  MYCONTACTS: "MY CONTACT",
  NEWCONTACT: "ADD NEW CONTACT",
  EDITCONTACT:"EDIT CONTACT",
  FAVOURITECONTACT: "FAVOURITE CONTACT"
};

const NAVIGATION_CONTANTS = {
  FAVOURITE_DRAWER: 'FAVOURITE_DRAWER',
  CONTACT_DRAWER: 'CONTACT_DRAWER'
}

const DRAWER_ROUTES = [
  {
    name: NAVIGATION_CONTANTS.CONTACT_DRAWER,
    component: StackNavigator
  },
  {
    name: NAVIGATION_CONTANTS.FAVOURITE_DRAWER,
    component: StackNavigator
  }
]

const STACK_ROUTES = {
  [NAVIGATION_CONTANTS.CONTACT_DRAWER]: [
    {
      name: APP_ROUTES.MYCONTACTS,
      component: MyContacts,
    },
    {
      name: APP_ROUTES.NEWCONTACT,
      component: CreateContact,
    },
    {
      name: APP_ROUTES.EDITCONTACT,
      component: CreateContact 
    },
  ],
  [NAVIGATION_CONTANTS.FAVOURITE_DRAWER]: [
    {
      name: APP_ROUTES.FAVOURITECONTACT,
      component: Favourite
    }
  ]
};

export {
  APP_ROUTES,
  DRAWER_ROUTES,
  STACK_ROUTES
};
