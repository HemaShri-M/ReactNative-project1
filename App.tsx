import { View, ScrollView,SafeAreaView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCards'
import ContactList from './components/ContactCards'

const App = () => {
  return (
    
    <View>
        <ScrollView>
          <FlatCards/>
          <ElevatedCards/>
          <FancyCards/>
          <ActionCard/>
         <ContactList/>
       </ScrollView>
   </View>
    
  )
}

export default App