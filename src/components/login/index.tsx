import AuthContainer from "@/components/ui/AuthContainer";
import TextField from "../ui/TextField";


export function RenderLogin(){
    return(
        <AuthContainer
            title="Bem-Vindo"
            subtitle="Faça seu login"
            icon="hotel">
        
            <TextField
                label="E-mail"
                icon="email">
            </TextField>

            <TextField
                label="Senha"
                icon="key">
            </TextField>

        </AuthContainer>

    )
}