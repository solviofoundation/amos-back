import createServer from './server'
import CONFIG from './config'

const {app} = createServer()
app.listen({ port: CONFIG.GRAPHQL_PORT }, () => {
  /* eslint-disable-next-line no-console */
  console.log(`GraphQLServer ready at ${CONFIG.GRAPHQL_URI} 🚀`)
})

// /*
//  * Create a new ApolloServer instance, serving the GraphQL schema
//  * created using makeAugmentedSchema above and injecting the Neo4j driver
//  * instance into the context object so it is available in the
//  * generated resolvers to connect to the database.
//  */


//  // Custom middleware to add a user object to the server requests
// const injectUser = async req => {
//   const token = req.headers.authorization;
//   try {
//     const { user } = await jwt.verify(token, SECRET);
//     req.user = user;
    
//   } catch (error) {
//     // error
//   }
//   req.next();
// };

// // Load facebook auth only if credentials present in .env
// if (process.env.FB_ID && process.env.FB_SECRET) {
//   require("./auth/facebook");
// }
// // Add Middleware to our Express server
// app.use(cors());
// app.use("*", injectUser);

// const server = new ApolloServer({
//   context: ({ req }) => ({ driver, SECRET, user: req.user || null }),
//   schema,
//   introspection: true,
//   playground: true,
// });

// // Specify port and path for GraphQL endpoint
// const port = process.env.GRAPHQL_LISTEN_PORT || 4001;
// const path = "/graphql";

// /*
// * Optionally, apply Express middleware for authentication, etc
// * This also also allows us to specify a path for the GraphQL endpoint
// */
// server.applyMiddleware({app, path});

// app.listen({port, path}, () => {
//   console.log(`GraphQL server ready at http://localhost:${port}${path}`);
// });
