// Carbon Code Theme - Dart/Flutter Sample
// This file demonstrates the enhanced syntax highlighting

import 'package:flutter/material.dart';

// Class definition
class CarbonFlutterDemo extends StatefulWidget {
  final String title;
  final ThemeMode themeMode;

  // Constructor
  const CarbonFlutterDemo({
    Key? key, 
    required this.title,
    this.themeMode = ThemeMode.dark,
  }) : super(key: key);

  @override
  State<CarbonFlutterDemo> createState() => _CarbonFlutterDemoState();
}

class _CarbonFlutterDemoState extends State<CarbonFlutterDemo> {
  // Variables and properties
  int _counter = 0;
  final List<String> _colorSchemes = [
    'Indigo',
    'Emerald',
    'Crimson',
    'Rose',
    'Amber',
  ];
  
  // Methods
  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }
  
  // Special Dart/Flutter features
  String get currentScheme => _colorSchemes[_counter % _colorSchemes.length];
  
  @override
  Widget build(BuildContext context) {
    // Color definition
    final Color primaryColor = _getSchemeColor(currentScheme);
    
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        backgroundColor: primaryColor,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'Carbon Code Theme Demo',
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 24),
            ),
            Text(
              'Current scheme: $currentScheme',
              style: TextStyle(color: primaryColor),
            ),
            Text(
              'Button pressed $_counter times',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
            // Widget composition with properties
            Container(
              margin: const EdgeInsets.all(16.0),
              padding: const EdgeInsets.all(8.0),
              decoration: BoxDecoration(
                border: Border.all(color: primaryColor),
                borderRadius: BorderRadius.circular(8.0),
              ),
              child: const Text('Enhanced syntax highlighting for Flutter'),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        backgroundColor: primaryColor,
        child: const Icon(Icons.add),
      ),
    );
  }

  // Helper method with Dart features
  Color _getSchemeColor(String scheme) {
    // Switch expression
    return switch (scheme) {
      'Indigo' => const Color(0xFF6366F1),
      'Emerald' => const Color(0xFF00FF88),
      'Crimson' => const Color(0xFFDC2626),
      'Rose' => const Color(0xFFEC4899),
      'Amber' => const Color(0xFFF59E0B),
      _ => Colors.grey,
    };
  }
}

// Extension methods
extension StringExtension on String {
  String capitalize() {
    return isEmpty ? this : '${this[0].toUpperCase()}${substring(1)}';
  }
}

// Enums
enum CarbonThemeVariant {
  dark,
  light;
  
  String get description => name.capitalize();
}

// Main function
void main() {
  runApp(
    MaterialApp(
      title: 'Carbon Code Demo',
      theme: ThemeData(primarySwatch: Colors.indigo),
      darkTheme: ThemeData.dark(),
      home: const CarbonFlutterDemo(title: 'Carbon Code Theme'),
    ),
  );
}
