import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'todo', loadComponent: () => import('./feature/pc/todo/todo.component').then(mod => mod.TodoComponent)},
    {path: 'calendar', loadComponent: () => import('./feature/pc/calendar/calendar.component').then(mod => mod.CalendarComponent)},
    {path: 'equipment', loadComponent: () => import('./feature/pc/equipment/equipment.component').then(mod => mod.EquipmentComponent)},
    {path: 'settings', loadComponent: () => import('./feature/pc/settings/settings.component').then(mod => mod.SettingsComponent)}
];


