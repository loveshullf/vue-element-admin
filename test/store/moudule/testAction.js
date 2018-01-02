'use strict';
export const testAction=(action,args,state,expectedMutations,done)=>{
    let count = 0
    const commit=(type, payload)=>{
        const mutation = expectedMutations[count]
        try {
            expect(mutation.type).toEqual(type)
            if (payload) {
              expect(mutation.payload).toMatchObject(payload)
            }
            mutation.fun(state,payload)
          } catch (error) {
            done(error)
          }
          count++
          if (count >= expectedMutations.length) {
            done()
          }
    }
     // 用模拟的 store 和参数调用 action
    action({ commit, state }, ...args)
     // 检查是否没有 mutation 被 dispatch
     if (expectedMutations.length === 0) {
        expect(count).to.equal(0)
        done()
      }
}