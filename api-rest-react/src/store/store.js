import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { CategoriaSlice } from './categoria/categoriaSlice';
import { clienteSlice } from './cliente/clienteSlice';
import { farmaciaSlice } from './farmacia/farmaciaSlice';
import { personalSlice } from './personal/personalSlice';
import { productoSlice } from './producto/productoSlice';
import { proveedorSlice } from './proveedor/proveedorSlice';


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    personal: personalSlice.reducer,
    farmacia: farmaciaSlice.reducer,
    cliente: clienteSlice.reducer,
    producto: productoSlice.reducer,
    categoria: CategoriaSlice.reducer,
    proveedor: proveedorSlice.reducer,
  },
});