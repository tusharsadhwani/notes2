# Quill: An online note taking platform

## subheadings

### sub sub heading

noteiuoahrfuioawh

- adwdfaw
- afwfwaf
- adwdfaw

- uiawhgouawihd
- aofwhaf

1. fwfha
2. segeas
3. hello

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |
| Bewdi        | Aastha        |

```py
from functools import lru_cache

@lru_cache
def fib(n):
    if n <= 1: return 1
    return fib(n-1) + fib(n-2)
```

```jsx
import { ChakraProvider } from "@chakra-ui/core";
import { AppProps } from "next/app";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
```

```dart
import 'package:flutter_sidebar/flutter_sidebar.dart';

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Flutter Sidebar')),
      drawer: Sidebar.fromJson(
        tabs: [
          {
            'title': 'Chapter A',
            'children': [
              {'title': 'Chapter A1'},
              {'title': 'Chapter A2'},
            ],
          },
          {
            'title': 'Chapter B',
            'children': [
              {'title': 'Chapter B1'},
              {
                'title': 'Chapter B2',
                'children': [
                  {'title': 'Chapter B2a'},
                  {'title': 'Chapter B2b'},
                ],
              },
            ],
          },
          {'title': 'Chapter C'},
        ],
      ),
    );
  }
}
```
