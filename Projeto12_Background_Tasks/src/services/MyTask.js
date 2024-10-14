import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch'

const TASK_NAME = 'MY_TASK'

TaskManager.defineTask(TASK_NAME, () => {
    try {
        const receivedNewData = 'My task (Fetch):' + Math.random()
        return receivedNewData ? BackgroundFetch.BackgroundFetchResult.NewData : BackgroundFetch.Result.NoData;
    } catch (error) {
        return BackgroundFetch.Result.Failed;
    }
});

const register = () => {
    return BackgroundFetch.registerTaskAsync (TASK_NAME, {
        minimumInterval: 2,
        stopOnTerminate: false,
    })
}

 const unregister = () => {
    return BackgroundFetch.unregisterTaskAsync (TASK_NAME)
}

export default {
    register,
    unregister,
}