
<p align="center">
<h2>Loan Simulator</h3>
</p>
<p>
    <b>Installation</b>
    <ol>
        <li>Clone Project</li>
        <li>Run <code>composer install</code></li>
        <li>setup your database by creating <b>.env</b> and copy contents of <b>.env.example</b> into <b>.env</b> and edit the databse part according to you configuration</li> 
        <li>Run <code>php artisan migrate</code> to create the table necessary to run application</li> 
        <li>Run <code>php artisan passport:install</code> to create "personal access" and "password grant" clients which will be used to generate access tokens:</li> 
        <li> Run your backend app yout project by <code>php artisan serve --port={port that prefer i.e 8080}</code><li>
            <li>Run your frontend app by <code>npm run development </code> </li>
            <li>Visit your app in <code>http://127.0.0.1:8090</code></li>
     </ul>
</p>
