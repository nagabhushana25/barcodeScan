import React from 'react';
import { CameraScreen } from 'react-native-camera-kit';
import Alert from 'react-native';


const Ecap = () => {

    const onBottomButtonPressed = (event) => {
        const captureImages = JSON.stringify(event.captureImages);
        alert(
          `"${event.type}" Button Pressed`,
          `${captureImages}`,
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false },
        );
      }

    return(
        <CameraScreen
            actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
            //onBottomButtonPressed={(event) => onBottomButtonPressed(event)}
            
            hideControls={false} 
            showCapturedImageCount={false} 
            scanBarcode={true}
            onReadCode={(event) => Alert.alert(event.nativeEvent.codeStringValue)} 
            showFrame={true} 
            laserColor='red' 
        />
    )
}

export default Ecap;
