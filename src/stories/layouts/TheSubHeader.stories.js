import TheLayout from '@/templates/layouts/TheLayout'
import StoreHelper from "@/utils/store_helper"

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
  menu,
  back,
}

const calendar_week = {
  type: 'calendar-week',
  func: function () {
    alert('calendar week')
  }
}
const calendar_month = {
  type: 'calendar-month',
  func: function () {
    alert('calendar month')
  }
}
const bookmark = {
  type: 'bookmark',
  func: function () {
    alert('bookmark')
  }
}
const inventory = {
  type: 'inventory',
  func: function () {
    alert('inventory')
  }
}
const filter = {
  type: 'filter',
  func: function () {
    alert('filter')
  }
}
const help = {
  type: 'help',
  func: function () {
    alert('help')
  }
}
const like = {
  type: 'like',
  func: function () {
    alert('like')
  }
}
const tip = {
  type: 'tip',
  func: function () {
    alert('tip')
  }
}

const buttonActionOptions = {
  calendar_week,
  calendar_month,
  bookmark,
  inventory,
  filter,
  help,
  like,
  tip,
}

export default {
  title: 'Layouts/Sub Header',
  argTypes: {
    title: {
      control: {type: 'text'},
    },
    buttonNavigation: {
      control: {type: 'select'},
      options: buttonNavigationOptions
    },
    buttonAction: {
      control: {type: 'select'},
      options: buttonActionOptions
    }
  }
}

const Template = (args) => ({
  components: {
    TheLayout
  },

  setup() {
    const { setHeader } = StoreHelper();
    setHeader({
      headerType: 'SubHeader',
      headerTitle: args.title,
      headerButtons: {
        buttonNavigation: args.buttonNavigation,
        buttonAction: args.buttonAction
      }
    })
  },

  template: `
    <TheLayout />
  `
})
export const Default = Template.bind({})
Default.args = {
  title: 'Sub Header',
  buttonNavigation: menu,
  buttonAction: calendar_week,
}