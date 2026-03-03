import React from 'react';
import { Mail, Phone } from 'lucide-react';
import './Contactos.css';

const contacts = [
  { id: 1, name: 'Ana Silva', email: 'ana.silva@email.com', phone: '+351 912 345 678', status: 'Ativo', role: 'Cliente' },
  { id: 2, name: 'Bruno Costa', email: 'bruno.c@empresa.pt', phone: '+351 923 456 789', status: 'Pendente', role: 'Parceiro' },
  { id: 3, name: 'Carla Santos', email: 'carla.santos@gmail.com', phone: '+351 964 567 890', status: 'Inativo', role: 'Lead' },
  { id: 4, name: 'Diogo Ferraz', email: 'd.ferraz@outlook.com', phone: '+351 935 678 901', status: 'Ativo', role: 'Cliente' },
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
                <th className="px-6 py-4">Contacto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50 transition-colors">
                  {/* Coluna do Nome: Alinhada à esquerda */}
                  <td className="px-6 py-8 text-left">
                    <div className="font-bold text-gray-900 text-lg">{contact.name}</div>
                  </td>

                  {/* Coluna do Contacto: Alinhada à esquerda com ícones fixos */}
                  <td className="px-6 py-8">
                    <div className="flex flex-col gap-2 items-start justify-center">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Mail size={18} className="text-blue-500 w-5" />
                        <span className="text-base">{contact.email}</span>
                      </div>
                      <br />
                      <div className="flex items-center gap-3 text-gray-600">
                        <Phone size={18} className="text-green-500 w-5" />
                        <span className="text-base">{contact.phone}</span>
                      </div>
                    </div>
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