import axios from 'axios';
const config = require('../../config')
const state = {
    requests:{}
};

function getToken(){
    let token = localStorage.getItem('token')
        if(token == null || token ==''){ 
            this.goToLogin();            
        }
    return token;
}

const getters = {
    allRequests: (state) => state.requests
};

const actions = {
    async fetchRequests({ commit }){
        let token = getToken()
        var header = {
            headers: {'Authorization': "bearer " + token}
        };
        const response = await axios.get(`${config.BACKEND_SERVER_IP}/admin/registrationrequests`,header)
        console.log(response)
        commit('setRequests',response.data)
    },
    async respondTo({ commit }, offer){
        let token = getToken();          
        var header = {
            headers: {'Authorization': "bearer " + token}
        };
        const response = await axios.post(`${config.BACKEND_SERVER_IP}/offers`,offer, header);
        commit('newOffer',response.data);
    },
    async deleteOffer({ commit }, id){
        let token = getToken()
        // console.log(localStorage.getItem('token'))
        var header = {
            headers: {'Authorization': "bearer " + token}
        };
        await axios.delete(`${config.BACKEND_SERVER_IP}/offers`,{data:{id:id}, headers: {'Authorization': "bearer " + token}})
        commit('removeOffer',id)
    },
    async filterTodos({ commit }, e){
        console.log(e);
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        console.log(limit);

       const response =  await axios.get(`http://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setOffers',response.data)
    },
    async updateOffer({ commit }, updOffer){
       const response =  await axios.put(`http://jsonplaceholder.typicode.com/todos/${updOffer.id}`,updOffer);
       commit('updateTodo',updOffer)

    }
};

const mutations = {
    setRequests: (state,requests) => (state.requests = requests),
    newOffer: (state, offer)=> state.offers.unshift(offer),
    removeOffer: (state,id)=> {console.log("hello"); state.offers = state.offers.filter((offer)=> offer._id != id)},
    updateOffer: (state,updOffer)=>{
        const index = state.todos.findIndex(offer=>offer.id === updOffer.id)
        if(index !== -1){
            state.todos.splice(index,1,updOffer);
        }
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}