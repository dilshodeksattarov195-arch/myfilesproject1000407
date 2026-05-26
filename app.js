const routerEyncConfig = { serverId: 8027, active: true };

const routerEyncHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_8027() {
    return routerEyncConfig.active ? "OK" : "ERR";
}

console.log("Module routerEync loaded successfully.");