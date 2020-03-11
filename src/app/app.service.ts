import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class service{
    endpoint: string;
    user_session_name:string = 'app_de_prueba';


    constructor(private httpClient: HttpClient, private router: Router){
        this.endpoint = "http://" + window.location.hostname + ":8000/api";
    }

    get_session = (session = localStorage.getItem(this.user_session_name))=>
        session ? JSON.parse(session) : null;

    set_session = session => {
        localStorage.setItem(this.user_session_name, JSON.stringify(session))
    };

    reset_session = () => {
        localStorage.removeItem(this.user_session_name);
    }

    get_headers = (session = this.get_session()) => {
        console.log(session.token);
        return session && session.token ? new HttpHeaders({
            'authorization':session.token
            }) : null
    };

    redirect_to = url => this.router.navigateByUrl(url);

    insertar = (nombre): Observable<any> => { return this.httpClient.post(this.endpoint + '/post', { nombre, responseType:'json'}) };
    actualizar = (params): Observable<any> => { return this.httpClient.put(this.endpoint + '/update', { nombre:params[0], idPersonas:params[1], responseType:'json'}) };
    borrar = (idPersonas): Observable<any> => { return this.httpClient.put(this.endpoint + '/delete', { idPersonas, responseType:'json'} ) };
    get = (): Observable<any> => { return this.httpClient.get(this.endpoint + '/', { responseType:'json'}) };
    login = (params):Observable<any> => { return this.httpClient.post(this.endpoint + '/login', { Email:params[0], Password:params[1], responseType:'json'} ) }
    logout = ():Observable<any> => { return this.httpClient.put(this.endpoint + '/logout',{}, { headers: this.get_headers(), responseType:'json'} ) }
}