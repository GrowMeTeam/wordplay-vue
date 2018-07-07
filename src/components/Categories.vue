<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Categories">
        </ActionBar>
        <ScrollView orientation="vertical">
            <AbsoluteLayout backgroundColor="#3c495e">
                <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
                <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
                <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
                <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
            </AbsoluteLayout>
            <AbsoluteLayout backgroundColor="#3c495e">
                <Label text="10,10" left="10" top="20" width="100" height="100" backgroundColor="#43b883"/>
                <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
                <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
                <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
            </AbsoluteLayout>
            <AbsoluteLayout backgroundColor="#3c495e">
                <Label text="10,10" left="10" top="30" width="100" height="100" backgroundColor="#43b883"/>
                <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
                <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
                <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
            </AbsoluteLayout>
            <AbsoluteLayout backgroundColor="#3c495e">
                <Label text="10,10" left="10" top="40" width="100" height="100" backgroundColor="#43b883"/>
                <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
                <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
                <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
            </AbsoluteLayout>
            <AbsoluteLayout backgroundColor="#3c495e">
                <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
                <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
                <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
                <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
            </AbsoluteLayout>
       </ScrollView>
    </Page>
</template>


<script>

import * as app from 'application';
import { isAndroid } from 'platform';
import * as frame from 'ui/frame';

  export default {
      created() {
        
        // function backEvent(args) {
        // console.log('EVENT BACK')
        // args.cancel = true; 
        // }
        // if (application.android) {
        //     application.android.on(application.AndroidApplication.activityBackPressedEvent, backEvent);
        // }

        // if (isAndroid) {
        // app.android.on(app.AndroidApplication.activityBackPressedEvent, (args: app.AndroidActivityBackPressedEventData) => {
        // const page = frame.topmost().currentPage;
        // if (page.hasListeners(app.AndroidApplication.activityBackPressedEvent)) {
        //     (<any>args).page = page;
        //     page.notify(args);
        // }
        // });
        //}
        
        
      }
  };

</script>