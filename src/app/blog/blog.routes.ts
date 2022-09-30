import { Routes } from "@angular/router";
import * as path from "path";
import { PostListComponent } from "../components/post-list/post-list.component";
import { BlogComponent } from "./blog.component";

export const routes :Routes=[
    {
        path:"",
        component:BlogComponent,
        children:[
            {
                path:"",
                component:PostListComponent
            }
        ]
    }
]