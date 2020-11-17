#!/bin/bash -xe

rm -rf physio.apk
$JAVA_HOME/bin/jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore keystore.jks dist/capacitor/android/apk/release/app-release-unsigned.apk personal
$ANDROID_HOME/build-tools/29.0.3/zipalign -v 4 dist/capacitor/android/apk/release/app-release-unsigned.apk physio-app.apk
