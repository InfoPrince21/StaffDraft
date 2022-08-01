
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
// import CampsiteInfoScreen from './CampsiteInfoScreen';
// import DirectoryScreen from './DirectoryScreen';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import AwardsScreen from './AwardsScreen';
import ChatScreen from './ChatScreen';
import DraftScreen from './DraftScreen';
import HelpScreen from'./HelpScreen';
import RankingScreen from './RankingsScreen';
import ProfileScreen from './ProfileScreen';
import StaffScreen from './StaffScreen';
import StatsScreen from './StatsScreen';
import TeamsScreen from './TeamsScreen';
import TicketScreen from './TicketsScreen';
// import ReservationScreen from './ReservationScreen';
import { Icon } from 'react-native-elements';
import logo from '../assets/images/logo.png';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPartners } from '../features/partners/partnersSlice';
import { fetchCampsites } from '../features/campsites/campsitesSlice';
import { fetchPromotions } from '../features/promotions/promotionsSlice';
import { fetchComments } from '../features/comments/commentsSlice';
import RankingsScreen from './RankingsScreen';
import { fetchAirTableStaff } from '../features/staff/staffSlice';
import { fetchAirTableTeams, fetchTeam1Air, fetchTeam2Air, fetchTeam3Air } from '../features/teams/teamSlice';
import { fetchStats } from '../features/stats/statsSlice';
import { fetchDraftRecap } from '../features/teams/teamSlice';
import DraftComponent from '../components/DraftComponent';
import StatsComponent from '../components/StatsComponent';
import StaffDetailScreen from './StaffDetailScreen';
import TeamDetailScreen from './TeamDetailScreen';
import SignInScreen from './SignInScreen';

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#040a2e' }
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={StatsComponent}
                options={({ navigation }) => ({
                    title: 'Home',
                    headerLeft: () => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const StatsNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='stats'
                component={StatsComponent}
                options={({ navigation }) => ({
                    title: 'Stats',
                    headerLeft: () => (
                        <Icon
                            name='wpforms'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const AwardsNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Awards'
                component={AwardsScreen}
                options={({ navigation }) => ({
                    title: 'Awards',
                    headerLeft: () => (
                        <Icon
                            name='trophy'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const ChatNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Chat'
                component={ChatScreen}
                options={({ navigation }) => ({
                    title: 'Chat',
                    headerLeft: () => (
                        <Icon
                            name='comments'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const DraftNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Draft'
                component={DraftComponent}
                options={({ navigation }) => ({
                    title: 'Draft',
                    headerLeft: () => (
                        <Icon
                            name='list-alt'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const ProfileNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Profile'
                component={StaffDetailScreen}
                options={({ navigation }) => ({
                    title: 'Profile',
                    headerLeft: () => (
                        <Icon
                            name='user'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const RankingsNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Rankings'
                component={StatsComponent}
                options={({ navigation }) => ({
                    title: 'Rankings',
                    headerLeft: () => (
                        <Icon
                            name='list-ol'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const StaffNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Staff' 
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Staff'
                component={StaffScreen}
                options={({ navigation }) => ({
                    title: 'Staff Directory',
                    headerLeft: () => (
                        <Icon
                            name='address-book'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
            <Stack.Screen
                name='Staff Detail'
                component={StaffDetailScreen}
                options={({ route }) => ({
                    title: route.params.staff.fields.name
                })}
            />
        </Stack.Navigator>
    );
};

const TeamsNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Teams'
                component={TeamsScreen}
                options={({ navigation }) => ({
                    title: 'Teams',
                    headerLeft: () => (
                        <Icon
                            name='users'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
            <Stack.Screen
                name='Team Detail'
                component={TeamDetailScreen}
                options={({ route }) => ({
                    title: route.params.team.fields.name
                })}
            />
        </Stack.Navigator>
    );
};



const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
            {/* <View style={{ flex: 1 }}>
                <Image source={logo} style={styles.drawerImage} />
            </View> */}
            <View style={{ alignItems: 'center', flex: 2 }}>
                <Text style={styles.drawerHeaderText}>Staff Draft</Text>
            </View>
        </View>
        <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold', }} />
    </DrawerContentScrollView>
);

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAirTableStaff());
        dispatch(fetchAirTableTeams());
        dispatch(fetchStats());
        dispatch(fetchDraftRecap());
        dispatch(fetchTeam1Air());
        dispatch(fetchTeam2Air());
        dispatch(fetchTeam3Air());
    }, [dispatch]);

    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerContent={CustomDrawerContent}
                drawerStyle={{ backgroundColor: '#d8d9d1' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{
                        title: 'Home',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Stats'
                    component={StatsNavigator}
                    options={{
                        title: 'Stats',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='wpforms'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Awards'
                    component={AwardsNavigator}
                    options={{
                        title: 'Awards',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='trophy'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Chat'
                    component={ChatNavigator}
                    options={{
                        title: 'Chat',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='comments'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Draft'
                    component={DraftNavigator}
                    options={{
                        title: 'Draft',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='list-alt'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Profile'
                    component={ProfileNavigator}
                    options={{
                        title: 'Profile',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='user'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Rankings'
                    component={RankingsNavigator}
                    options={{
                        title: 'Rankings',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='list-ol'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Staff'
                    component={StaffNavigator}
                    options={{
                        title: 'Staff Directory',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='address-book'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Teams'
                    component={TeamsNavigator}
                    options={{
                        title: 'Teams',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='users'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: '#040a2e',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default Main;