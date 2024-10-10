export const environment = {
    production: true,
    apiUrl: 'http://localhost:5560/api/',
    keys: {
        token: 'TOKEN',
        userProfile: 'USER_PROFILE'
    },
    endpoints: {
        vehicles: {
            getVehicles: 'GetVehicles',
            getVehicleById: 'GetVehicle'
        }
    }
};