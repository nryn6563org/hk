export { default as AccordionItem } from '../../components/AccordionItem.vue'
export { default as DefalutFooter } from '../../components/DefalutFooter.vue'
export { default as DefaultHeader } from '../../components/DefaultHeader.vue'
export { default as ModalWrap } from '../../components/ModalWrap.vue'
export { default as SampleComp } from '../../components/SampleComp.vue'
export { default as SubHeader } from '../../components/SubHeader.vue'
export { default as IssueCatchAlarm } from '../../components/IssueCatch/CatchAlarm.vue'
export { default as IssueCatchContentFour } from '../../components/IssueCatch/ContentFour.vue'
export { default as IssueCatchContentOne } from '../../components/IssueCatch/ContentOne.vue'
export { default as IssueCatchQuickIssue } from '../../components/IssueCatch/QuickIssue.vue'
export { default as IssueCatchTodayIssue } from '../../components/IssueCatch/TodayIssue.vue'
export { default as SignalCatchTab } from '../../components/SignalCatch/CatchTab.vue'
export { default as SignalCatchTabNotJoin } from '../../components/SignalCatch/CatchTabNotJoin.vue'
export { default as SignalCatchContentThree } from '../../components/SignalCatch/ContentThree.vue'
export { default as SignalCatchContentTwo } from '../../components/SignalCatch/ContentTwo.vue'
export { default as SignalCatchIsaButton } from '../../components/SignalCatch/IsaButton.vue'
export { default as SignalCatchItemCard } from '../../components/SignalCatch/ItemCard.vue'
export { default as SignalCatchItemSignalAlarm } from '../../components/SignalCatch/ItemSignalAlarm.vue'
export { default as SignalCatchNewSearch } from '../../components/SignalCatch/NewSearch.vue'
export { default as SignalCatchSearchWrap } from '../../components/SignalCatch/SearchWrap.vue'
export { default as SignalCatchSettingAlarm } from '../../components/SignalCatch/SettingAlarm.vue'
export { default as SignalCatchSettingAlarm2 } from '../../components/SignalCatch/SettingAlarm2.vue'
export { default as SignalAlarmTop } from '../../components/SignalCatch/SignalAlarmTop.vue'
export { default as SignalList } from '../../components/SignalCatch/SignalList.vue'
export { default as SignalCatchTimingAlarm } from '../../components/SignalCatch/TimingAlarm.vue'
export { default as SignalCatchTradingSignal } from '../../components/SignalCatch/TradingSignal.vue'
export { default as SignalCatchTradingSignal2 } from '../../components/SignalCatch/TradingSignal2.vue'

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
