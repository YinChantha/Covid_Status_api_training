import { v4 as uuid } from 'uuid';

let status = [];
export const createstatus =  (req,res) => {
    const user = req.body;   
    status.push({...user, id: uuid()})
    res.send(`The covide situation with the new_case ${user.new_case} added to the database!`); 
};
export const getstatuss = (req,res) =>{
    res.send(status);
}
export const getstatus = (req,res) => {
    const {id }= req.params;
    const foundUser = status.find((user) => user.id === id);
    res.send(foundUser);
}
export const deletestatus = (req,res) => {
    const {id} = req.params;
    status = status.filter((user) => user.id !== id);
    res.send(`Status with the id ${id} deleted from the databse`);
};

export const updatestatus = (req,res) => {
    const {id} = req.params;
    const {date, new_case, total_case,total_recovered, total_death} = req.body;
    const user = status.find((user) => user.id === id)
    if(date) user.date = date;
    if(new_case) user.new_case = new_case;
    if(total_case) user.total_case = total_case;
    if(total_recovered) user.total_recovered = total_recovered;
    if(total_death) user.total_death = total_death;
    res.send(`Status with the id ${id} updated`)
}
