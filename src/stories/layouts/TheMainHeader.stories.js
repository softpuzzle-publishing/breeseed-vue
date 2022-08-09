import TheLayout from '@/templates/layouts/TheLayout'
import StoreHelper from "@/utils/store_helper";

const menu = {
  type: 'menu',
}
const back = {
  type: 'back',
  func: function () {
    history.back()
  }
}

const buttonNavigationOptions = {
  undefined,
  menu,
  back,
}

const health_clinic = {
  type: 'health-clinic',
}

const buttonActionOptions = {
  undefined,
  health_clinic,
}

export default {
  title: 'Layouts/Main Header',
  argTypes: {
    buttonNavigation: {
      control: {type: 'select'},
      options: buttonNavigationOptions
    },
    buttonAction: {
      control: {type: 'select'},
      options: buttonActionOptions
    },
  }
}

const Template = (args) => ({
  components: {
    TheLayout
  },

  setup() {
    const { setHeader } = StoreHelper();
    setHeader({
      headerType: 'MainHeader',
      headerButtons: {
        buttonNavigation: args.buttonNavigation,
        buttonAction: args.buttonAction,
      }
    })
  },

  template: `
    <TheLayout />
  `
})
export const Default = Template.bind({})
Default.args = {
  buttonNavigation: menu,
  buttonAction: health_clinic,
}