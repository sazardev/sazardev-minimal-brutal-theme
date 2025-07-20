// === SazarDev Brutal Minimal Theme - Go Test ===
// Prueba específica para el código de Go con mejores colores

package main

import (
	"database/sql"
	"errors"
	"fmt"
	"log"
)

// User representa un usuario del sistema
type User struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	IsActive bool   `json:"is_active"`
}

// UserRepository maneja operaciones de usuario
type UserRepository interface {
	Save(user *User) error
	FindByID(id int) (*User, error)
	Delete(id int) error
}

// PostgresUserRepo implementa UserRepository
type PostgresUserRepo struct {
	db *sql.DB
}

// NewUserRepository crea un nuevo repositorio
func NewUserRepository(db *sql.DB) *PostgresUserRepo {
	return &PostgresUserRepo{db: db}
}

// Save guarda un usuario - EJEMPLO MEJORADO
func (r *PostgresUserRepo) Save(user *User) error {
	// Variables más visibles ahora
	query := `INSERT INTO users (name, email, is_active) VALUES ($1, $2, $3)`

	// El r.db ahora se ve mejor con el nuevo color
	_, err := r.db.Exec(query, user.Name, user.Email, user.IsActive)
	if err != nil {
		return fmt.Errorf("failed to save user: %w", err)
	}

	return nil
}

// CreateUser función principal - MEJOR VISIBILIDAD
func CreateUser(repo UserRepository, name string, email string) (*User, error) {
	// Validación con colores mejorados
	if name == "" {
		return nil, errors.New("name cannot be empty")
	}

	// Creación del objeto con propiedades más visibles
	user := &User{
		ID:       generateID(),
		Name:     name,
		Email:    email,
		IsActive: true,
	}

	// Este patrón p.repo ahora se ve mucho mejor
	if err := repo.Save(user); err != nil {
		return nil, fmt.Errorf("repository error: %w", err)
	}

	return user, nil
}

// Ejemplo de tu código original - AHORA MEJORADO
func CreatePoop(input CreatePoopInput) (CreatePoopOutput, error) {
	poop := domain.Poop{
		Name:  input.Name,
		Email: input.Email,
	}

	// Esta línea ahora se ve mucho mejor:
	// - p.repo tiene mejor color (azul claro)
	// - &poop se destaca
	// - err tiene color específico
	if err := p.repo.Save(&poop); err != nil {
		return CreatePoopOutput{}, err
	}

	return CreatePoopOutput{
		Poop:    poop,
		Message: "Poop created successfully",
	}, nil
}

// Channel operations con colores específicos
func ProcessUsers(userChan <-chan User) {
	for user := range userChan {
		go func(u User) {
			// Operaciones con punteros más visibles
			processUserData(&u)
		}(user)
	}
}

// Función con receiver mejorado
func (u *User) UpdateEmail(newEmail string) error {
	// El u.Email ahora se ve mejor
	if u.Email == newEmail {
		return errors.New("email is the same")
	}

	u.Email = newEmail
	return nil
}

// Error handling con nuevos colores
func HandleError(err error) {
	if err != nil {
		log.Printf("Error occurred: %v", err)
		return
	}
}

// Constantes con colores mejorados
const (
	MaxUsers     = 1000
	DefaultEmail = "default@example.com"
	APIVersion   = "v1.0.0"
)

// Variables globales
var (
	GlobalRepo UserRepository
	IsDebug    = true
	UserCount  = 0
)

func main() {
	// Ejemplo completo con mejor visibilidad
	repo := NewUserRepository(db)

	user, err := CreateUser(repo, "John Doe", "john@example.com")
	if err != nil {
		HandleError(err)
		return
	}

	fmt.Printf("Created user: %+v\n", user)
}

/*
=== MEJORAS APLICADAS ===

✅ Variables y propiedades: Azul claro (#a8d0ff) - Más visible
✅ Selección multilinea: Verde neón con transparencia coherente
✅ Operadores: Verde suave (#aaffaa) - Armonía con tema
✅ Keywords: Azul cyan (#66ccff) - Modernos y sutiles
✅ Strings: Verde menta (#99ddaa) - Sutil pero visible
✅ Funciones: Verde neón (#00ff88) - Destacadas
✅ Go específico:
   - Struct fields: Azul cielo (#88ddff)
   - Receivers: Naranja suave (#ffaa55)
   - Interfaces: Magenta (#dd88ff)
   - Error handling: Amarillo dorado (#ffcc77)
   - Punteros: Verde neón bold

=== FILOSOFÍA DE COLORES ===

🎨 PALETA ARMONIOSA:
- Verde neón (#00ff88) como accent principal
- Azules fríos para variables y tipos
- Verdes suaves para strings y operadores
- Acentos cálidos para elementos especiales

🎯 MÁXIMA LEGIBILIDAD:
- Contraste suficiente sin saturar
- Colores funcionales, no decorativos
- Armonía cromática que calma la vista
- Brutal en contraste, minimal en ruido
*/
