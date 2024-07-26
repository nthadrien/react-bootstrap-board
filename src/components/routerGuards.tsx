
const user = {id:0, username: null , role:""};

export const ProtectedRoutes = async (): Promise<any>=>  {
    if ( user && user.username && ["admin","client"].includes(user.role) ) return true;
    throw new Response ("Une authentification est nécessaire pour accéder à la ressource!", { status: 401 });
};

export const AdminRoutes = async (): Promise<any> => {
    const user = {id:0, username: "admin" , role:"manager"};
    if( !user.username ) throw new Response("Une authentification est nécessaire pour accéder à la ressource.", { status: 401 });
    if  ( user.username && user.role !== "admin") throw new Response("Les droits d'accès ne vous permettent pas  d'accéder cette ressource!", { status: 403 });
    return true;
};