import React from 'react';
import { Mail, Phone } from 'lucide-react';
import './Contactos.css';

const contacts = [
  { id: 1, name: 'Geral', phone: '22 207 7500\nextensão 1220', local: 'HSA' },
  { id: 2, name: 'Liliana Ferreira', Função: 'Diretor de Serviço - DL' , email: 'lilianaferreira.logistica@ulssa.min-saude.pt', phone: 'Extensão 1220', local: 'HSA' },
  { id: 3, name: 'Filipe Teixeira', Função: 'Assitente Técnico - DL ', email: 'filipeteixeira.logistica@ulssa.min-saude.pt', phone: 'Extensão 1220', local:' HSA' },
  { id: 4, name: 'Pedro Ezequiel', Função: 'Assistente Técnico - Armazém', email: 'pedroezequiel.logística@ulssa.min-saúde.pt', phone: 'Extensão 1949', local: 'HSA'},
  { id: 5, name: 'Nuno Ferreira', Função: 'Assistente Técnico - Armazém', email: 'nunoferreira.logistica@ulssa.min-saude.pt', phone: 'Extensão 1122', local: 'HSA' },
  { id: 6, name: 'José Pedro Barbosa', Função: 'Assistente Técnico - Armazém', email: 'u69903@ulssa.min-saude.pt', phone: 'Extensão 1949', local: 'HSA'},
  { id: 7, name: 'Tiago Coelho', Função: 'Técnico Superior - DL', email: 'tiagocoelho.logistica@ulssa.min-saude.pt', phone: 'Extensão 1949', local: 'HSA'},
  { id: 8, name: 'Fernanda Teixeira \n Augusta Teixeira', Função: 'Técnico Auxiliar de Saude - Armazém', phone: 'Extensão 81507', local: 'CMIN'},
  { id: 9, name: 'Jorge Viegas', Função: 'Técnico Auxiliar de Saude - Armazém', email: 'jorgeviegas.logistica@ulssa.min-saude.pt ', phone: 'Extensão 83010', local: 'HML'},
  { id: 10, name: 'Eduardo Carvalho', Função: 'Técnico Auxiliar de Saude - Armazém', email: 'eduardocarvalho.logistica@ulssa.min-saude.pt', phone: 'Extensão 83010', local: 'HML'},
  { id: 11, name: 'Mónica Melo', Função: 'Assistente Técnico - Armazém', email: 'produtos.dieteticos@chporto.min-saude.pt', local: 'CGM'},
  { id: 12, name: 'Tiago Santos', Função: 'Assistente Técnico - Armazém', email: 'produtos.dieteticos@chporto.min-saude.pt ', local: 'CGM'},
  { id: 13, name: 'Pedro Rios', Função: 'Técnico Superior - Imobilizado', email: 'pedrorios.aprov@ulssa.min-saude.pt', phone: 'Extensão 1193', local: 'IMOBILIZADO'},
];

const ContactTable = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl">
        <div className="border-b">
          <h2 className="text-xl">Lista de Contactos</h2>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Função</th>
                <th>Contacto</th>
                <th>Local</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>
                    <div className="font-medium whitespace-pre-line ">{contact.name}</div>
                  </td>

                  <td>
                    <div className="role-text">{contact.Função}</div>
                  </td>

                  <td>
                    {/* Verificação condicional para Email */}
                    {contact.email && (
                      <div className="contact-item-row">
                        <Mail size={18} />
                        <span>{contact.email}</span>
                      </div>
                    )}

                    {/* Verificação condicional para Telefone */}
                    {contact.phone && (
                      <div className="contact-item-row">
                        <Phone size={18} />
                        <span className="whitespace-pre-line">{contact.phone}</span>
                      </div>
                    )}
                  </td>

                  <td>
                    <div className="font-medium">{contact.local}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactTable;