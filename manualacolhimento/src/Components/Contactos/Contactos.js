import React from 'react';
import { Mail, Phone } from 'lucide-react';
import './Contactos.css';

const contacts = [
  { id: 1, name: 'Geral', phone: '22 207 7500\nextensão 1220', local: 'HSA' },
  { id: 2, name: 'Liliana Ferreira', Função: 'Diretor de Serviço - DL' , email: 'lilianaferreira.logistica@ulssa.min-saude.pt', phone: 'extensão 1220', local: 'HSA' },
  { id: 3, name: 'Filipe Teixeira', Função: 'AT - Logística ', email: 'filipeteixeira.logistica@ulssa.min-saude.pt', phone: 'extensão 1220', local:' HSA' },
  { id: 4, name: 'Pedro Ezequiel', Função: 'AT - Armazém', email: 'pedroezequiel.logística@ulssa.min-saúde.pt', phone: 'extensão 1949', local: 'HSA'},
  { id: 5, name: 'Nuno Ferreira', Função: 'AT - Armazém', email: 'nunoferreira.logistica@ulssa.min-saude.pt', phone: 'extensão 1122', local: 'HSA' },
  { id: 6, name: 'José Pedro Barbosa', Função: 'AT - Armazém', email: 'u69903@ulssa.min-saude.pt', phone: 'extensão 1949', local: 'HSA'},
  { id: 7, name: 'Tiago Coelho', Função: 'TS - Logística', email: 'tiagocoelho.logistica@ulssa.min-saude.pt', phone: 'extensão 1949', local: 'HSA'}
];

const ContactTable = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Lista de Contactos</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
                <th className="px-6 py-4">Nome</th>
                <th className="px-6 py-4">Função</th>
                <th className="px-6 py-4">Contacto</th>
                <th className="px-6 py-4">Local</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50 transition-colors">
                  {/* Coluna do Nome: Alinhada à esquerda */}
                  <td className="px-6 py-8 text-left">
                    <div className="font-bold text-gray-900 text-lg">{contact.name}</div>
                  </td>

                  <td className="px-6 py-8 text-left">
                    <div className="font-bold text-gray-900 text-lg">{contact.Função}</div>
                  </td>

                  {/* Coluna do Contacto: Alinhada à esquerda com ícones fixos */}
                  <td className="px-6 py-8">
                    <div className="flex flex-col gap-4 items-start justify-center">
                      {/* Bloco do Email */}
                      <div className="flex items-center gap-3 text-gray-600">
                        <Mail size={18} className="text-blue-500 w-5 flex-shrink-0" />
                        <span className="text-base">{contact.email}</span>
                      </div>

                      {/* Bloco do Telefone - Ajustado para aceitar quebras de linha */}
                      <div className="flex items-start gap-3 text-gray-600">
                        <Phone size={18} className="text-green-500 w-5 mt-1 flex-shrink-0" />
                        <span className="text-base whitespace-pre-line">
                          {contact.phone}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-8 text-left">
                    <div className="font-bold text-gray-900 text-lg">{contact.local}</div>
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