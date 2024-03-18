export { default as AccordionItem } from '../../components/AccordionItem.vue'
export { default as DefaultHeader } from '../../components/DefaultHeader.vue'
export { default as ModalWrap } from '../../components/ModalWrap.vue'
export { default as SampleComp } from '../../components/SampleComp.vue'
export { default as SubHeader } from '../../components/SubHeader.vue'
export { default as SignalCatchTab } from '../../components/SignalCatch/CatchTab.vue'
export { default as SignalCatchTabNotJoin } from '../../components/SignalCatch/CatchTabNotJoin.vue'
export { default as SignalCatchContentTwo } from '../../components/SignalCatch/ContentTwo.vue'
export { default as SignalCatchItemCard } from '../../components/SignalCatch/ItemCard.vue'
export { default as SignalCatchSearchWrap } from '../../components/SignalCatch/SearchWrap.vue'
export { default as SignalCatchSettingAlarm } from '../../components/SignalCatch/SettingAlarm.vue'
export { default as SignalList } from '../../components/SignalCatch/SignalList.vue'
export { default as IssueCatchAlarm } from '../../components/IssueCatch/CatchAlarm.vue'
export { default as IssueCatchContentOne } from '../../components/IssueCatch/ContentOne.vue'
export { default as IssueCatchQuickIssue } from '../../components/IssueCatch/QuickIssue.vue'
export { default as IssueCatchTodayIssue } from '../../components/IssueCatch/TodayIssue.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
