import { Usuario } from "src/usuarios/entities/usuario.entity";

export class CreatePostDto {
    titulo: string;
    conteudo: string;
    usuario: Usuario;
}
